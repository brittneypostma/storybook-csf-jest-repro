import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ['{src,spec}/**/*.{test,spec}.{js,ts}']
  }
};

export default config;
