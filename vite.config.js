import { sveltekit } from '@sveltejs/kit/vite';
import Inspector from 'vite-plugin-svelte-inspector';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Inspector({ enabled: false })]
};

export default config;
