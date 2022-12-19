<script lang="ts">
	import { slide } from 'svelte/transition';

	import type { Summit } from '$lib/types';
	import { getData } from '$lib/data/get-data';

	const data = getData() as Summit[];

	let isNavOpen = false;

	function closeNav() {
		isNavOpen = false;
	}

	function openNav() {
		isNavOpen = true;
	}

	function handleKey(e: KeyboardEvent) {
		if (!isNavOpen) return;
		if (e.code === 'Escape') isNavOpen = false;
	}
</script>

<svelte:window on:keydown={handleKey} />

<nav>
	{#if isNavOpen}
		<button class="close-button" on:click={closeNav} aria-label="Zamknij nawigację">X</button>
		<ul transition:slide={{ duration: 400 }}>
			<li>
				<a href="/" on:click={closeNav}>START</a>
			</li>
			<ol>
				<h2>Lista szczytów</h2>
				{#each data as summit}
					<li>
						<a href="/szczyty/{summit.summitName}" on:click={closeNav}>{summit.summitName}</a>
					</li>
				{/each}
			</ol>
		</ul>
	{:else}
		<button class="open-button" aria-label="Otwórz nawigację" on:click={openNav}>
			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.64841 7.54449C2.84474 7.35031 3.16132 7.35206 3.3555 7.5484L12 16.2889L20.6445 7.5484C20.8387 7.35206 21.1553 7.35031 21.3516 7.54449C21.5479 7.73867 21.5497 8.05525 21.3555 8.25159L12.3555 17.3516C12.2616 17.4466 12.1336 17.5 12 17.5C11.8664 17.5 11.7384 17.4466 11.6445 17.3516L2.6445 8.25159C2.45032 8.05525 2.45207 7.73867 2.64841 7.54449Z"
				/>
			</svg>
		</button>
	{/if}
</nav>

<style>
	nav {
		position: absolute;
		width: 100%;
		inset-block-start: 0;
		z-index: var(--main-nav);
		background-color: var(--col-bg-light);
		border-block-end: var(--border);
	}

	ul {
		padding: var(--gutter);
		min-height: 100vh;
		overflow: scroll;
	}

	ul,
	ol {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

  button {
    cursor: pointer;
  }

	.close-button {
		position: fixed;
		inset-block-start: var(--gutter);
		inset-inline-end: var(--gutter);
	}

	.open-button {
		height: var(--nav-toggle-button-height);
		display: grid;
		width: 100%;
		place-items: center;
	}

	svg {
		fill: var(--col-primary);
	}
</style>
