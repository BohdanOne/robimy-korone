import { sveltekit } from '@sveltejs/kit/vite';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), isoImport()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
