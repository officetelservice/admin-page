import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ mode }: { mode: 'development' | 'production' }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: [
				{ find: '@', replacement: path.resolve(__dirname, 'src') },
				{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
				{
					find: '@components',
					replacement: path.resolve(__dirname, 'src/components'),
				},
				{
					find: '@hooks',
					replacement: path.resolve(__dirname, 'src/hooks'),
				},
				{
					find: '@types',
					replacement: path.resolve(__dirname, 'src/types'),
				},
				{
					find: '@utils',
					replacement: path.resolve(__dirname, 'src/utils'),
				},
				{
					find: '@layout',
					replacement: path.resolve(__dirname, 'src/layout'),
				},
			],
		},
		server: {
			proxy: {
				'/api': {
					target: 'https://api.officetel-backend.shop/',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
					secure: false,
					ws: true,
				},
			},
		},
	});
};
