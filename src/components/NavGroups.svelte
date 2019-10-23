<script>
    export let heading = "Groups";
    import NavPanelLink from "./NavPanelLink.svelte";
</script>

<nav class="panel">
    <NavPanelLink id="notificiations-link" icon="fas fa-bell"     href="/notifications" label="Notifications" />
    <NavPanelLink id="messages-link"       icon="fas fa-comment"  href="/messages"      label="Messages"      />
    <NavPanelLink id="bookmarks-link"      icon="fas fa-bookmark" href="/bookmarks"     label="Bookmarks"     />
</nav>

<nav class="panel">
  <p class="panel-heading">
    Groups
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Work</a>
    <a>Home</a>
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Funny Jokes
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Pet Pictures
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    My Local Library
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    My Local Government
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    My Local Neighborhood
  </a>
</nav>