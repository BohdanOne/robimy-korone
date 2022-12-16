<div>
  <slot />
</div>

<style>
  div {
    padding-block: var(--gutter);
  }
  
  @media (min-width: 400px) {
    div {
      padding: var(--gutter);
    }
  }
</style>
