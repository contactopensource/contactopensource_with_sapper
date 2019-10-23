<script>
    export let heading = "Models";
    import NavPanelLink from "./NavPanelLink.svelte";
</script>

<nav class="panel">
    <NavPanelLink id="organizations-link"   icon="fas fa-users"         href="/organizations" label="Organizations" />
    <NavPanelLink id="persons-link"         icon="fas fa-user"          href="/persons"       label="Persons"       />
    <NavPanelLink id="places-link"          icon="fas fa-map"           href="/places"        label="Places"        />
    <NavPanelLink id="things-link"          icon="fas fa-book"          href="/things"        label="Things"        />
    <NavPanelLink id="events-link"          icon="fas fa-calendar-alt"  href="/events"        label="Events"        />
    <NavPanelLink id="goals-link"           icon="fas fa-check-square"  href="/goals"         label="Goals"         />
    <NavPanelLink id="notes-link"           icon="fas fa-sticky-note"   href="/notes"         label="Notes"         />
</nav>