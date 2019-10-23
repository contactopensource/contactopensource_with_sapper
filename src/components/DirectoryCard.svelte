<script>
    export let uri;
    export let title;
    export let subtitle;
    export let box_img_uri;
</script>

<style>
.card {
    margin-bottom: 6px;
}
.card-content {
    padding: 12px;
}
</style>

<div class="card">
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <a rel="prefetch" href="{uri}"><img class="is-rounded" src="{box_img_uri}" alt="{title}"></a>
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4"><a rel="prefetch" href="{uri}">{title}</a></p>
                <p class="subtitle is-6"><a rel="prefetch" href="{uri}">{subtitle}</a></p>
            </div>
            <div class="media-right">
                <button class="button">
                    <span class="icon is-small"><i class="fas fa-chevron-circle-down"></i></span>
                </button>
            </div>
        </div>
    </div>
</div>
