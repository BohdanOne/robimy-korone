<script lang="ts">
  import type { Summit } from '$lib/types';

  export let summits: Summit[];

  const total = summits.length;
  const doneCount = summits.filter((s) => s.done).length;
  const progress = (doneCount / total) * 100;
</script>

<div style={`--progress: ${progress}%;`}>
  {doneCount} / {total}
</div>

<style>
  div {
    --progress: 0;
    position: relative;
    text-shadow: -.2rem -.2rem 1rem #fff;
  }
  
  div::before {
    position: absolute;
    height: 100%;
    width: var(--progress);
    inset-inline-start: 0;
    inset-block-start: 0;
    content: '';
    background: linear-gradient(90deg, var(--col-bg-heavy) 0%,  var(--col-ternary) 100%);
    z-index: -1;
  }
</style>
