<script lang="ts">
  export let title: string;
</script>

<section>
  <h2>{title}</h2>
  <slot />
</section>

<style>
  h2 {
    margin-block-end: var(--gutter);
  }

  section {
    margin-block: var(--gutter);
    background-color: var(--col-bg-light);
    padding: var(--gutter);
  }
</style>
