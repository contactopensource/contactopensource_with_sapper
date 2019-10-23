<script>
    export let heading = "Areas";
    import NavPanelLink from "./NavPanelLink.svelte";
</script>

<nav class="panel">
    <NavPanelLink id="notificiations-link" icon="fas fa-bell"     href="/notifications" label="Notifications" />
    <NavPanelLink id="messages-link"       icon="fas fa-comment"  href="/messages"      label="Messages"      />
    <NavPanelLink id="bookmarks-link"      icon="fas fa-bookmark" href="/bookmarks"     label="Bookmarks"     />
</nav>