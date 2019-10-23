<script>
    export let heading = "Explore";
    import NavPanelLink from "./NavPanelLink.svelte";
</script>

<nav class="panel">
    <NavPanelLink id="news-link"         icon="fas fa-newspaper"      href="/news"        label="News" />
    <NavPanelLink id="community-link"    icon="fas fa-map-signs"      href="/community"   label="Community" />
    <NavPanelLink id="volunteer-link"    icon="fas fa-first-aid"      href="/volunteer"   label="Volunteer" />
    <NavPanelLink id="marketplace-link"  icon="fas fa-money-bill"     href="/marketplace" label="Marketplace" />
    <NavPanelLink id="jobs-link"         icon="fas fa-building"       href="/jobs"        label="Jobs" />
    <NavPanelLink id="books-link"        icon="fas fa-book"           href="/books"       label="Books" />
    <NavPanelLink id="music-link"        icon="fas fa-music"          href="/music"       label="Music" />
    <NavPanelLink id="movies-link"       icon="fas fa-film"           href="/movies"      label="Movies" />
    <NavPanelLink id="sports-link"       icon="fas fa-football-ball"  href="/sports"      label="Sports" />
    <NavPanelLink id="travel-link"       icon="fas fa-plane"          href="/travel"      label="Travel" />
</nav>
