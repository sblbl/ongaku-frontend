# 🌐 sveltekit boilerplate 🌐
This is a boilerplate for a simple [SvelteKit](https://kit.svelte.dev/) website, with a few extra features:
- [x] [TailwindCSS](https://tailwindcss.com/) for styling, with a preconfigured `tailwind.config.js` file
- [x] Dark mode support
- [x] Dynamic navigation bar creation in the Header component (see `src/lib/Header.svelte`)
- [x] External API calls
- [x] Mobile container snippet
- [x] Local font loading

⚠️ DO NOT DIRECTLY EDIT THIS REPO ⚠️ 

Instead, [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository) it and make your changes on your copy.

### What you will find

#### TailwindCSS
Style custom settings in `tailwind.config.js`. See also `src/app.css` for the `@tailwind` directive and some global style rules.

#### Dark mode
See the `src/lib/components/DarkMode.svelte` component for the implementation. The `DarkMode` component triggers the `dark` class on the `body` element, which is used by TailwindCSS to apply the dark mode styles.

#### Dynamic navigation bar
The `src/lib/components/Header.svelte` component dynamically creates the navigation bar based on the routes defined by the folders inside `src/routes` (api is excluded).

#### External API calls
The `src/routes/+page.svelte` page demonstrates how to do an external API call to [pokeapi](https://pokeapi.co/) and displays the results. See also `src/routes/api/+server.js` for the server-side implementation.

#### Mobile container
A simple component to wrap content in a container similar to a mobile device. See `src/lib/components/MobileContainer.svelte` for the implementation.

#### Local font loading
Loads and sets in the Tailwind config a local font. See `tailwind.config.js` and `src/app.css` for details.

### Developing

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```