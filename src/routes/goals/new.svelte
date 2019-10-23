<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
	}
</script>

<script>

	import ListErrors from '../../components/ListErrors.svelte';
    let errors = null;
    async function submit(event) {
		alert("TODO");
		// const response = await post(`?`, { ? });
		// // TODO handle network errors
		// errors = response.errors;
		// if (response.?) {
		// 	goto('/');
		// }
	}    

</script>

<svelte:head>
	<title>New goal</title>
</svelte:head>

<h1 class="title">New goal</h1>

<ListErrors {errors}/>
<form on:submit|preventDefault='{submit}'>

    <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="Alice Adams">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        </div>
    </div>

    <h2 class="title">Estimate</h2>

    <div class="field">
        <label class="label">Realistic</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fab fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Optimistic</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fab fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Pessimistic</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fab fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Equilibristic</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fab fa-user"></i></span>                
        </div>
    </div>

    <h2 class="title">Finally</h2>

    <div class="field is-grouped">
        <div class="control">
            <button class="button" type="submit">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>

    <h2 class="title">Finally</h2>

    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="/terms">terms and conditions</a>
            </label>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button" type="submit">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
    </div>

</form>