<script>
	/* DARK MODE
		Manually toggable via button and automatically toggled based on OS preference
	*/
	import { onMount } from 'svelte'
	let darkMode = false

	const toggleDarkMode = () => {
		const body = document.querySelector('body')
		body.classList.toggle('dark')
		darkMode = body.classList.contains('dark')
		darkMode ? localStorage.theme = 'dark' : localStorage.theme = 'light'
	}

	onMount(() => {
		const body = document.querySelector('body')

		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			darkMode = true
			body.classList.add('dark')
		} else {
			darkMode = false
			body.classList.remove('dark')
		}
		// Whenever the user explicitly chooses to respect the OS preference
		localStorage.removeItem('theme')
	})
</script>

<div class='fixed top-0 right-2 p-2'>
	<button class='btn btn-primary' on:click={toggleDarkMode}>{`${darkMode ? '🌝' : '🌚'}`}</button>
</div>