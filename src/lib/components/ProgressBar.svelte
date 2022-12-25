<script lang="ts">
	import type { Summit } from 'src/app';

	export let summits: Summit[];

	const total = summits.length;
	const doneCount = summits.filter((s) => s.done).length;
	const progress = (doneCount / total) * 100;
</script>

<div style={`--progress: ${progress}%;`}>
	<span>{doneCount} / {total}</span>
</div>

<style>
	div {
		--progress: 0;
		position: relative;
	}

	div::before {
		position: absolute;
		height: 100%;
		width: var(--progress);
		inset-inline-start: 0;
		inset-block-start: 0;
		content: '';
		background: linear-gradient(90deg, var(--col-bg-heavy) 0%, var(--col-ternary) 100%);
		z-index: -1;
	}

	span {
		padding-inline: var(--gutter);
		background-color: var(--col-bg-light);
		border-radius: var(--border-radius);
	}
</style>
