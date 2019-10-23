<script context="module">
	import { api_uri } from "../global.mjs";
</script>

<script>
    import { goto, stores } from '@sapper/app';
    const { session } = stores();

    async function submit(event) {
        $session.user = email; //TODO remove
		goto('/');
	}
</script>

<svelte:head>
	<title>Sign out</title>
</svelte:head>

<h1 class="title">Sign out</h1>

<form>
    <div class="form-action">
        <div class="control">
            <button class="button is-primary" type="submit">Sign out</button>
        </div>
    </div>
</form>
