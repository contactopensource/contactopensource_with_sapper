<script>
    import { vet } from '../global.mjs';
    export let title;
    export let subtitle;
    export let box_img_uri;
    export let top_img_uri;
    export let content;
</script>

<div class="card">
    {#if (vet(top_img_uri))}
        <div class="card-image">
            <figure class="image">
                <img src="{top_img_uri}" alt="{title}" height="120">
            </figure>
        </div>
    {/if}
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-rounded is-128x128">
                    <img src="{box_img_uri}" alt="{title}">
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
        <div class="content">
            {content}
        </div>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <button class="button">
                <span class="icon is-small"><i class="fas fa-info-circle"></i></span>
                <span>About</span>
            </button>
        </p>
        <p class="card-footer-item">
            <button class="button">
                <span class="icon is-small"><i class="fas fa-question-circle"></i></span>
                <span>Connect</span>
            </button>
        </p>
        <p class="card-footer-item">
            <button class="button">
                <span class="icon is-small"><i class="fas fa-comment"></i></span>
                <span>Message</span>
            </button>
        </p>
    </footer>
</div>
