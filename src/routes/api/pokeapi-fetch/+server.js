/* 
	Queries the external pokeAPI and returns the response
*/
import { json } from '@sveltejs/kit'

export async function POST({request}) {
	const { pokemon } = request.body

	let requestOptions = {
		method: 'GET',
		redirect: 'follow'
	}

	
	try {
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", requestOptions)
		response = await response.json()

		return json({pokemon : response}, { status: 200 })
	} catch (error) {
		return json({error}, { status: 500 })
	}
}