<script>
    import { onMount } from "svelte"
	import { navigating } from "$app/stores"
	let pages = [],
		currentPath = ''

	const getPages = async() => {
		const res = await fetch('/api/header', {
			method: 'POST',
			body: JSON.stringify({}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const r = await res.json()
		console.log(r)
		pages = r.routes
	}

	const updatePath = () => {
		console.log("updating path", window.location.pathname)
		currentPath = $navigating.to.url.pathname
	}

	$: if ($navigating) updatePath()

	onMount(async () => {
		await getPages()
		currentPath = window.location.pathname
	})
</script>
<div class='absolute top-0 left-0 w-full overflow-x-scroll flex items-center gap-x-4 p-2 pr-12 text-sm'>
	<div>
			<a href={`/`} class:font-bold={currentPath == "/"}>🏠 home</a>
		</div>
	{#each pages as page}
		<div>
			<a href={`/${page}`} class:font-bold={currentPath == `/${page}`}>{`${page.replace('-', ' ')}`}</a>
		</div>
	{/each}
</div>