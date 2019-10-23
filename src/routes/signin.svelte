<script context="module">
	import { api_uri } from "../global.mjs";
	export async function preload(page, session) {
		// const { path, params, query } = page;
	}
</script>

<script>
    import { goto, stores } from '@sapper/app';
    const { session } = stores();
    //import { post } from 'utils.js';

    // Inputs
    let email = "";
    let email_placeholder = "Email";
    let password = "";
    let password_placeholder = "Password";

    // Errors
	import ListErrors from '../components/ListErrors.svelte';
    let errors = null;

    async function submit(event) {
        $session.user = email; //TODO remove
		goto('/');
		// const response = await post(`auth/login`, { email, password });
		// // TODO handle network errors
		// errors = response.errors;
		// if (response.user) {
		// 	$session.user = response.user;
		// 	goto('/');
		// }
	}    
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<h1 class="title">Sign in</h1>

<ListErrors {errors}/>
<form on:submit|preventDefault='{submit}'>

    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
            <input name="email" class="input" type="text" placeholder="{email_placeholder}" bind:value={email}>
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        </div>
    </div>

    <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left">
            <input name="password" class="input" type="password" placeholder="{password_placeholder}" bind:value={password}>
            <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
        </div>
    </div>

    <div class="form-action">
        <div class="control">
            <button class="button is-primary" type="submit">Submit</button>
        </div>
    </div>

</form>