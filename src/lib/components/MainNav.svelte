<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { Summit } from 'src/app';

	export let summits: Summit[];

	let isNavOpen = false;
	let body: HTMLBodyElement | null;

	function closeNav() {
		isNavOpen = false;
		if (body) {
			body.style.position = 'relative';
			body.removeEventListener('keydown', handleKey);
		}
	}

	function openNav() {
		isNavOpen = true;
		if (body) {
			body.style.position = 'fixed';
			body.addEventListener('keydown', handleKey);
		}
	}

	function handleKey(e: KeyboardEvent) {
		if (e.code === 'Escape') closeNav();
	}

	onMount(() => {
		body = document.querySelector('body');
		return () => {
			closeNav();
		};
	});
</script>

<nav class:open={isNavOpen}>
	{#if isNavOpen}
		<button class="close-button" on:click={closeNav} aria-label="Zamknij nawigację">
			<svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.21875 0.78125L0.78125 2.21875L9.5625 11L0.78125 19.7812L2.21875 21.2188L11 12.4375L19.7812 21.2188L21.2188 19.7812L12.4375 11L21.2188 2.21875L19.7812 0.78125L11 9.5625L2.21875 0.78125Z"
				/>
			</svg>
		</button>
		<ul transition:slide={{ duration: 400 }}>
			<li>
				<a href="/" on:click={closeNav}>START</a>
			</li>
			<ol>
				<h2>Lista szczytów</h2>
				{#each summits as summit}
					<li>
						<a href="/szczyty/{summit.slug}" on:click={closeNav}>{summit.name}</a>
					</li>
				{/each}
			</ol>
		</ul>
	{:else}
		<button class="open-button" aria-label="Otwórz nawigację" on:click={openNav}>
			<svg width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.21875 0.6875L0.78125 2.09375L13 14.3125L25.2188 2.09375L23.7812 0.6875L13 11.4688L2.21875 0.6875ZM2.21875 7.6875L0.78125 9.09375L13 21.3125L25.2188 9.09375L23.7812 7.6875L13 18.4688L2.21875 7.6875Z"
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

	nav.open {
		height: 100%;
		min-height: 100vh;
		overflow: scroll;
		overscroll-behavior: contain;
	}

	ul {
		padding: var(--gutter);
	}

	ul,
	ol {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	h2 {
		margin-block-start: var(--gutter);
	}
	a {
		text-decoration: none;
		font-size: var(--text-x-large);
	}

	button,
	a {
		cursor: pointer;
		color: var(--col-primary);
		transition: color var(--transition);
	}

	button:hover,
	button:focus-visible,
	a:hover,
	a:focus-visible {
		color: var(--col-accent);
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
		fill: currentColor;
	}
</style>
