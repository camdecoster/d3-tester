import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'development' ? '/' : '/d3-tester/',
	plugins: [vue()]
});
