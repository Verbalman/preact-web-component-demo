import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: 'src/web-component.tsx',
			name: 'DemoWebComponent',
			fileName: 'demo-web-component'
		}
	},
	// assetsInclude: ['**/*.css']
});
