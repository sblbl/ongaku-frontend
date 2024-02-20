<script>
	import '../app.css'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import DarkMode from '$lib/components/DarkMode.svelte'
</script>

<div class='app w-screen min-h-screen flex flex-col items-center antialiased bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light transition-colors duration-500 ease-in-out'>
	<Header />	
	<DarkMode />	
	<main class='w-screen max-w-lg justify-center items-center content-center p-4 mt-6'>
		<slot />
	</main>
	<Footer />
</div>