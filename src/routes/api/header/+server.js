/* 
	⚠️ DON'T USE THIS FILE ⚠️
	this is needed by the Header component to get the routes
*/

import { json } from '@sveltejs/kit'
import fs from 'fs'
import path from 'path'

const routesDir = path.join('', 'src', 'routes')
console.log(routesDir)
const files = fs.readdirSync(routesDir)
const routes = files.filter(file => file != 'api' && !file.endsWith('.svelte'))
console.log(routes)

export async function POST({request}) {
	return json({routes}, { status: 200 })
}