<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
        const response = await this.fetch(`${api_uri}/music/index.json`, { credentials: 'include' });
		const json = await response.json();
		if (response.status === 200) { return { json: json, oo: json.data }; }
		this.error(response.status, json.message);
	}
</script>

<script>
	import DirectoryCard from '../../components/DirectoryCard.svelte';
    import NavAreas from '../../components/NavAreas.svelte';
    import NavModels from '../../components/NavModels.svelte';
    import NavExplore from '../../components/NavExplore.svelte';
    import { o_to_uri, o_to_box_img_uri } from '../../global.mjs';
    export let json = [];
    export let oo = [];
</script>

<svelte:head>
	<title>Things</title>
</svelte:head>

<div class="columns">
    <div class="column is-one-quarter">
        <NavAreas/>
        <NavModels/>
    </div>
    <div class="column">
        {#each oo as o}
            <DirectoryCard
                uri={o_to_uri(o)}
                box_img_uri={o_to_box_img_uri(o)}
                title={o.attributes.name}
                subtitle={o.attributes.email_address}
            />
        {/each}
    </div>
    <div class="column is-one-quarter">
        <NavExplore/>
    </div>
</div>
