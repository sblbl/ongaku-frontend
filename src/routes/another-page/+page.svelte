<script>
	import { onMount } from 'svelte'

	const callServerFunction = async () => {
		const res = await fetch('/api/server', {
			method: 'POST',
			body: JSON.stringify({}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const r = await res.json()
		console.log(r)
	}

	const title = 'A simple page' // Change this
	const description = 'A boilerplate page. On mount, it calls the server function from src/routes/api/server' // Change this

	onMount(() => {
		console.log('mounted')
		callServerFunction()
	})
</script>

<section class='w-full text-center'>
	<h1>{ title }</h1>
  	<p>{ description }</p>
</section>

<svelte:head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='title' content={title} />
    <meta property='og:title' content={title} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://www.oio.studio' />
    <meta property='og:description' content={description} />
    <meta property='og:image' content='https://www.oio.studio/og.png' />
    <meta name='twitter:title' content='chatnot.es' />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content='https://www.oio.studio/og.png' />
    <meta name='twitter:card' content='summary_large_image' />
</svelte:head>