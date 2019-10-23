<script>
    export let id; // Link id e.g. "foo-bar-link"
    export let icon; // Link icon, using Font Awseome icon CSS class e.g. "fas fa-user"
    export let href; // Link href e.g. "/foo/bar"
    export let label; // Link label e.g. "Foo Bar"
</script>

<a class="panel-block nowrap" href="/{href}"><span class="panel-icon"><i class="{icon}" aria-hidden="true"></i></span><span><a id="{id}" rel="prefetch" href="{href}" >{label}</a></span></a>
