/* 
	Add server-side functions to your snippet.
*/
import { json } from '@sveltejs/kit'

export async function POST({request}) {
	try {
		return json({msg : 'hello'}, { status: 200 })
	} catch (error) {
		return json({error}, { status: 500 })
	}
}