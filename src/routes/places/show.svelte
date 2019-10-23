<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
	}
</script>

<script>
	export let o = [];
</script>

<svelte:head>
	<title>Place</title>
</svelte:head>

<h1 class="title">Place</h1>

<h2 class="subtitle">{o.title}</h2>
		
<ul>
<li>TODO</li>
</ul>
