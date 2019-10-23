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
    export let card_img_alt = "image";
    export let box_img_uri = "http://via.placeholder.com/48x48"; /* Dimensions must match Svelte card image class e.g. 48x40. */
    export let avatar_img_alt = "avatar";
    export let content; // Example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.";
</script>

<style>
.card {
    margin-bottom: 6px;
}
.card-content {
    padding: 12px;
}
</style>

<!-- `card`: the main card container -->
<div class="card">
                        
    <!-- `card-content`: a multi-purpose container for any other element -->
    <div class="card-content">

        <!-- Example layout: a thumbnail at left, and title/subtitle at middle, and icon button at right.  -->
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img class="is-rounded" src="{box_img_uri}" alt="{title}">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{title}</p>
                <p class="subtitle is-6">{subtitle}</p>
            </div>
            <div class="media-right">
                <button class="button">
                    <span class="icon is-small"><i class="fas fa-chevron-circle-down"></i></span>
                </button>
            </div>
        </div>
    
        {#if (vet(content))}
            <!-- Example layout: some demo text  -->
            <div class="content">
                {content}
            </div>
        {/if}

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
            <button class="button">
                <span class="icon is-small"><i class="far fa-heart"></i></span>
                <span>Like</span>
            </button>
        </p>

        <p class="card-footer-item">
            <button class="button">
                <span class="icon is-small"><i class="far fa-comment"></i></span>
                <span>Comment</span>
            </button>
        </p>

        <p class="card-footer-item">
            <button class="button">
                <span class="icon is-small"><i class="fas fa-share"></i></span>
                <span>Share</span>
            </button>
        </p>

    </footer>

</div>
