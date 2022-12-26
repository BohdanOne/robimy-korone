<script lang="ts">
  import type { Picture } from 'src/app';
  import Image from './Image.svelte';

  export let pictures: Picture[];
</script>

<div class="gallery">
  {#each pictures as picture (picture.cloudinaryPublicId)}
    <Image publicId={picture.cloudinaryPublicId} alt={picture.description}/>
  {/each}
</div>

<style>
  .gallery {
    overflow: auto;
    display: flex;
    scroll-snap-type: x mandatory;
  }

  .gallery :global(figure) {
    scroll-snap-align: start;
  }

  .gallery :global(figure:not(:last-of-type)) {
    margin-inline-end: var(--gutter);
  } 
</style>
