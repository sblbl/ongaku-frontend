<script>
	import { onMount } from 'svelte'
	let pokemonData = null

	const callPokeapi = async () => {
		pokemonData = null
		const res = await fetch('/api/pokeapi-fetch', {
			method: 'POST',
			body: JSON.stringify({
				pokemon: 'ditto'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const r = await res.json()
		pokemonData = r.pokemon
		console.log(pokemonData)
	}

	const title = 'A simple API request'
	const description = 'Calls the server function from src/routes/api/pokeapi-fetch and shows the result' // Change this

	onMount(() => {
		console.log('mounted')
		callPokeapi()
	})
</script>

<section class='w-full text-center flex flex-col items-center'>
	<h1>{ title }</h1>
  	<p>{ description }</p>

	  <div class='w-full max-w-44 mt-4 px-4 pb-4 rounded-lg border-secondary-green border-2 flex flex-col items-center'>
			{#if pokemonData}
			<img src={pokemonData.sprites.front_default}  />
			<strong>{pokemonData.name}</strong>
			<p>Height: {pokemonData.height}</p>
			<p>Weight: {pokemonData.weight}</p>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
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