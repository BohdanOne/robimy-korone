<script>
	import './global.css';
	import 'leaflet/dist/leaflet.css';
	import MainNav from '$lib/components/MainNav.svelte';
</script>

<MainNav />
<main>
	<slot />
</main>

<style>
	main {
		padding-block-start: var(--nav-toggle-button-height);
		height: 100vh;
	}
</style>