<script context="module">
	import { api_uri } from "../../global.mjs";
	export async function preload(page, session) {
        // if (!session.user) return this.redirect(302, 'signin');
		// const { path, params, query } = page;
	}
</script>

<script>
    import { vet_to_string } from '../../global.mjs';
    export let o = [];

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
	<title>New organization</title>
</svelte:head>

<h1 class="title">New organization</h1>

<ListErrors {errors}/>
<form on:submit|preventDefault='{submit}'>

    <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="name" value="{vet_to_string(o.name)}">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        </div>
    </div>

    <div class="field">
        <label class="label">Telephone</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="telephone_text" value="{vet_to_string(o.telephone_text)}">
            <span class="icon is-small is-left"><i class="fas fa-phone"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="email_address" value="{vet_to_string(o.email_address)}">
            <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Link</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="link_uri" value="{vet_to_string(o.link_uri)}">
            <span class="icon is-small is-left"><i class="fas fa-link"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Note</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="note" value="{vet_to_string(o.note)}">
            <span class="icon is-small is-left"><i class="fas fa-sticky-note"></i></span>                
        </div>
    </div>

    <h2 class="title">Postal Address</h2>

    <div class="field">
        <label class="label">One-line</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="postal_address_line" value="{vet_to_string(o.postal_address_line)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Street &bull; Route &bull; Line 1</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="street_address_text" value="{vet_to_string(o.locality_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Premise &bull; Suite &bull; Line 2</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="premise_text" value="{vet_to_string(o.premise_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Locality &bull; City &bull; Town</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="locality_text" value="{vet_to_string(o.locality_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Region &bull; State &bull; Province</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="region_text" value="{vet_to_string(o.region_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Postal Code &bull; ZIP Code &bull; Routing Code</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="country_text" value="{vet_to_string(o.postal_code_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Country</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="country_text" value="{vet_to_string(o.country_text)}">
            <span class="icon is-small is-left"><i class="fas fa-map"></i></span>                
        </div>
    </div>

    <h2 class="title">Social Networking</h2>

    <div class="field">
        <label class="label">AngelList</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="angellist_uri" value="{vet_to_string(o.angellist_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-angellist"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Crunchbase</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="crunchbase_uri" value="{vet_to_string(o.crunchbase_uri)}">
            <span class="icon is-small is-left"><i class="fas fa-link"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Facebook</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="facebook_uri" value="{vet_to_string(o.facebook_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-facebook"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">GitHub</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="github_uri" value="{vet_to_string(o.github_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-github"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Instagram</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="instagram_uri" value="{vet_to_string(o.instagram_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-instagram"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">LinkedIn</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="linkedin_uri" value="{vet_to_string(o.linkedin_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-linkedin-in"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Mixcloud</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="mixcloud_uri" value="{vet_to_string(o.mixcloud_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-mixcloud"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Reddit</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="reddit_uri" value="{vet_to_string(o.reddit_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-reddit"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Snapchat</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="snapchat_uri" value="{vet_to_string(o.snapchat_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-snapchat"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Spotify</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="spotify_uri" value="{vet_to_string(o.spotify_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-spotify"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Soundcloud</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="soundcloud_uri" value="{vet_to_string(o.soundcloud_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-soundcloud"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Skype</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="skype_uri" value="{vet_to_string(o.skype_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-skype"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Twitter</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="twitter_uri" value="{vet_to_string(o.twitter_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-twitter"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">Vimeo</label>
        <div class="control has-icons-left">
            <input class="input" type="text" vname="vimeo_uri" value="{vet_to_string(o.vimeo_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-vimeo"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">WhatsApp</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="whatsapp_uri" value="{vet_to_string(o.whatsapp_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-whatsapp"></i></span>                
        </div>
    </div>

    <div class="field">
        <label class="label">YouTube</label>
        <div class="control has-icons-left">
            <input class="input" type="text" name="youtube_uri" value="{vet_to_string(o.youtube_uri)}">
            <span class="icon is-small is-left"><i class="fab fa-youtube"></i></span>                
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