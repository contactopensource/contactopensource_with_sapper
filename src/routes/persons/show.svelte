<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
	}
</script>

<script>
	import { o_to_box_img_uri, o_to_top_img_uri, o_person_to_content } from '../../global.mjs';
	import MainCard from '../../components/MainCard.svelte';
	export let o = [];
</script>

<svelte:head>
	<title>Person</title>
</svelte:head>

<MainCard
	title={o.attributes.title}
	subtitle={o.attributes.email_address}
	box_img_uri={o_to_box_img_uri(o)}
	top_img_uri={o_to_top_img_uri(o)}
	content={o_person_to_content(o)}
/>

<ul>
<li>TODO</li>
</ul>
