// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.dago.lt',
  base: '/',
  integrations: [UnoCSS()],
});
