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
	<title>Event</title>
</svelte:head>

<h1 class="title">Event</h1>

<h2 class="subtitle">{o.full_name}</h2>
		
<ul>
<li>TODO</li>
</ul>
