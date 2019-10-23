<!--
    ## Card ##

    An all-around flexible and composable component.

    The card component comprises several elements that you can mix and match:

    * `card`: the main container
        * `card-header`: a horizontal bar with a shadow
        * `card-header-title`: a left-aligned bold text
        * `card-header-icon`: a placeholder for an icon
        * `card-image`: a fullwidth container for a responsive image
        * `card-content`: a multi-purpose container for any other element
        * `card-footer`: a horizontal list of controls
        * `card-footer-item`: a repeatable list item

-->
<script>
    import { vet } from '../global.mjs';
    export let title = "Title";
    export let subtitle = "Subtitle";
    export let card_img_src = "http://via.placeholder.com/160x120"; /* Dimensions must match Svelte card image class e.g. 4by3. */
    export let card_img_alt = "card image";
    export let box_card_image_src = "http://via.placeholder.com/48x48"; /* Dimensions must match Svelte card image class e.g. 48x40. */
    export let box_card_image_alt = "card thumbnail";
    export let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.";

	import ListErrors from './ListErrors.svelte';
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

<style>
.card {
    margin-bottom: 6px;
}
.card-content {
    padding: 12px;
}
</style>

<ListErrors {errors}/>
<form on:submit|preventDefault='{submit}'>

<!-- `card`: the main card container -->
<div class="card">

    <!-- `card-header`: a horizontal bar with a shadow -->
    <header class="card-header">

        <!-- `card-header-title`: a left-aligned bold text -->
        <p class="card-header-title">
            Create Post
        </p>

    </header>

    <!-- `card-content`: a multi-purpose container for any other element -->
    <div class="card-content">
    
        <!-- Example layout: some demo text  -->
        <div class="content">
            <div class="control">
                <textarea class="textarea" rows="3" placeholder="Hello world"></textarea>
            </div>
        </div>

    </div>

    <!-- `card-image`: a fullwidth container for a responsive image -->
    {#if (vet(card_img_src))}
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="{card_img_src}" alt="{card_img_alt}" width="160" height="120">
            </figure>
        </div>
    {/if}

    <!-- `card-footer`: a horizontal list of controls -->
    <footer class="card-footer">

        <!-- `card-footer-item`: a horizontal list item; you can use as many of these as you want -->
        <p class="card-footer-item">
            <button class="button" type="button">
                <span class="icon is-small"><i class="fas fa-image"></i></span>
                <span>Add Photo</span>
            </button>
        </p>

        <p class="card-footer-item">
            <button class="button" type="button">
                <span class="icon is-small"><i class="fas fa-tag"></i></span>
                <span>Add Tags</span>
            </button>
        </p>

        <p class="card-footer-item">
            <button class="button" type="button">
                <span class="icon is-small"><i class="fas fa-check"></i></span>
                <span>Post</span>
            </button>
        </p>

    </footer>

</div>

</form>
