<script>
    export let title = "Title";
    export let subtitle = "Subtitle";
    export let box_card_image_src = "http://via.placeholder.com/128x128";
    export let box_card_image_alt = "thumbnail";
    export let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.";
</script>

<article class="media">
  <figure class="media-left">
    <p class="image is-48x48">
      <img src="{box_card_image_src}" alt="{box_card_image_alt}">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{title}</strong>
        <br>
        <small>{subtitle}</small>
        <br>
        {content}
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
