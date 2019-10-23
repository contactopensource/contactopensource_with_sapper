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
	<title>User profile</title>
</svelte:head>

<h1 class="title">New user</h1>

<ListErrors {errors}/>
<form on:submit|preventDefault='{submit}'>

    <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="Alice Adams">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        </div>
    </div>

    <div class="field">
        <label class="label">Telephone</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="+0-000-000-0000">
            <span class="icon is-small is-left"><i class="fas fa-phone"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="alice@example.com">
            <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Link</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://example.com">
            <span class="icon is-small is-left"><i class="fas fa-link"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Note</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="Note about anything">
            <span class="icon is-small is-left"><i class="fas fa-note"></i></span>                
        </div>
    </div>

    <h2 class="title">Social Networking</h2>

    <div class="field">
        <label class="label">AngelList</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://angel.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-angellist"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Facebook</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://facebook.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-facebook"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">GitHub</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://github.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-github"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Instagram</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://instagram.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-instagram"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">LinkedIn</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://linkedin.com/in/alice">
            <span class="icon is-small is-left"><i class="fab fa-linkedin-in"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Mixcloud</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://mixcloud.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-mixcloud"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Reddit</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://reddit.com/u/alice">
            <span class="icon is-small is-left"><i class="fab fa-reddit"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Snapchat</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://snapchat.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-snapchat"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Spotify</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://spotify.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-spotify"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Soundcloud</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://soundloud.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-soundcloud"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Skype</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://skype.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-skype"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Twitter</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://twitter.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-twitter"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Vimeo</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://vimeo.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-vimeo"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">WhatsApp</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://whatsapp.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-whatsapp"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">YouTube</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="https://youtube.com/alice">
            <span class="icon is-small is-left"><i class="fab fa-youtube"></i></span>                
        </div>
    </div>

    <h2 class="title">Names</h2>

    <div class="field">
        <label class="label">Given name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Middle name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Family name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Legal name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Prefix</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Suffix</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Salutation</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Adressee</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Nickname</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <h2 class="title">Pronouns</h2>

    <div class="field">
        <label class="label">Subject pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Object pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Dependent possessive pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Independent possessive pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Reflexive pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Intensive pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Disjunctive pronoun</label>
        <div class="control has-icons-left">
            <input class="input" type="text" value="">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>                
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