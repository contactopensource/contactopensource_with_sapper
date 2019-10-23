<script context="module">
	import { api_uri, asset_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
		const id = "ccf8bf385cce40a4290ac17ee4c1c94b"; 
		const uri = `${api_uri}/organizations/${id}/show.json`;
        const response = await this.fetch(`${api_uri}/organizations/${id}/show.json`, { credentials: 'include' });
		const json = await response.json();
		if (response.status === 200) { return { json: json }; }
		this.error(response.status, json.message);
	}
</script>

<script>
	export let json = [];
	export let o = json.data[0];
	export let a = o.attributes;
</script>

<svelte:head>
	<title>{a.name}</title>
</svelte:head>

<img src="{asset_uri}/{a.box_img_uri}">

<h1 class="title">{a.name}</h1>

<h2 class="subtitle">{a.twitter_bio}</h2>

<ul>
<li>Email: <a href="mailto:{a.email_address}">{a.email_address}</a></li>
<li>Telephone: <a href="tel:{a.telephone_text}">{a.telephone_text}</a></li>
<li>Postal: {a.postal_address_line}</li>
<li>Facebook: <a href="{a.facebook_uri}">{a.facebook_uri}</a></li>
<li>Twitter: <a href="{a.twitter_uri}">{a.twitter_uri}</a></li>
<li>LinkedIn: <a href="{a.linkedin_uri}">{a.linkedin_uri}</a></li>
<li>Crunchbase: <a href="{a.crunchbase_uri}">{a.crunchbase_uri}</a></li>
</ul>
