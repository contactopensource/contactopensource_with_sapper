<script context="module">
	import { api_uri } from "../global.mjs";
	export async function preload(page, session) {
        // const { path, params, query } = page;
    }
</script>

<script>
    import { stores } from '@sapper/app';
    const { session, page } = stores();

    import { o_to_box_img_uri } from '../global.mjs';
	import PostCard from '../components/PostCard.svelte';
    import NavAreas from '../components/NavAreas.svelte';
    import NavModels from '../components/NavModels.svelte';
    import NavExplore from '../components/NavExplore.svelte';
    import NewPost from '../components/NewPost.svelte';
    export let posts = [];
</script>

<svelte:head>
	<title>Contact Open Source</title>
</svelte:head>

{#if ($session.user)}
    <!-- $session.user:{$session.user} --> 
    <div class="columns">
        <div class="column is-one-quarter">
            <NavAreas/>
            <NavModels/>
        </div>
        <div class="column">
            <NewPost/>
            {#each posts as o}
                <PostCard
                    box_img_uri={o_to_box_img_uri(o)}
                    title={o.attributes.title}
                    subtitle={o.attributes.subtitle}
                    content={o.attributes.content}
                />
            {/each}
        </div>
        <div class="column is-one-quarter">
            <NavExplore/>
        </div>
    </div>
{:else}

<h1 class="title">Contact Open Source</h1>

<h2 class="subtitle">A social network for social good.</h2>

<form>
    <div class="buttons">
        <a class="button is-primary is-link" href="/signup">Sign up</a>
        <a class="button is-primary is-link" href="/signin">Sign in</a>
    </div>
</form>

{/if}
