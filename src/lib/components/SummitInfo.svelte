<script lang="ts">
	import type { Summit } from 'src/app';
	import PageSection from '$lib/components/PageSection.svelte';

	export let summit: Summit;
</script>

<PageSection title="Podstawowe dane">
	<ul>
		<li>
			Nazwa szczytu: <span>{summit.name}</span>
		</li>
		<li>
			Pasmo górskie: <span>{summit.mountainRange}</span>
		</li>
		{#if summit.location.alt}
			<li>
				Wysokość: <span>{summit.location.alt}m n.p.m.</span>
			</li>
		{/if}
		<li>
			Zdobyty: <span>{summit.done ? '✅' : '❌'}</span>
		</li>
		<li>
			Zdobyty przed przystąpieniem do Klubu Zdobywców KGP:
			<span>{summit.doneBefore ? '✅' : '❌'}</span>
		</li>
	</ul>
</PageSection>

<style>
	span {
		font-weight: bold;
		margin-inline-start: var(--gutter-s);
	}
</style>
