<script>
	import { onMount } from 'svelte'

	const title = 'Music map'
	const description = 'A visualisation of the music I listen'

	onMount(() => {
		console.log('mounted')
	})
</script>

<section class='w-full text-center'>
	<h1>{ title }</h1>
  	<p>{ description }</p>
    <p class='font-gsans pt-4 text-sm'>Local font file</p>
</section>

<svelte:head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='title' content={title} />
    <meta property='og:title' content={title} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://github.com/sblbl' />
    <meta property='og:description' content={description} />
    <meta property='og:image' content='https://i1.rgstatic.net/ii/profile.image/949014778355712-1603274163738_Q512/Marta-Fioravanti.jpg' />
    <meta name='twitter:title' content='chatnot.es' />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content='https://i1.rgstatic.net/ii/profile.image/949014778355712-1603274163738_Q512/Marta-Fioravanti.jpg' />
    <meta name='twitter:card' content='summary_large_image' />
</svelte:head>