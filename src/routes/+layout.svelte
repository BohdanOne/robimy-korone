<script lang="ts">
	import './global.css';
	import 'leaflet/dist/leaflet.css';
	
	import type { Summit } from 'src/app';
	import MainNav from '$lib/components/MainNav.svelte';

	export let data: { summits: Summit[] };
</script>

<MainNav summits={data.summits}/>
<main>
	<slot />
</main>

<style>
	main {
		padding-block-start: var(--nav-toggle-button-height);
		height: 100vh;
	}
</style>