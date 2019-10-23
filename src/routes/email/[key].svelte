<script context="module">
	import { api_uri } from '../../global.mjs';
	export async function preload({ params, query }) {
		//(`email/${params.key}.json`);
        const response = await this.fetch(`${api_uri}/persons/index.json`, { credentials: 'include' });
		const json = await response.json();
		if (response.status === 200) { return { json: json, oo: json.data }; }
		this.error(response.status, json.message);
	}
</script>

<script>
	export let json = [];
	export let o = [];
</script>

<svelte:head>
	<title>{o.attributes.title}</title>
</svelte:head>

<h1>{o.attributes.title}</h1>

<div class='content'>
	{o.attributes.description}
</div>
