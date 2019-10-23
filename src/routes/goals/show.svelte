<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let o = [];
</script>

<svelte:head>
	<title>Person</title>
</svelte:head>

<h1 class="title">Person</h1>

<h2 class="subtitle">{o.full_name}</h2>
		
<ul>
<li>TODO</li>
</ul>
