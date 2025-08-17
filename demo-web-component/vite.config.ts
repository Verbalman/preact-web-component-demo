import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: 'src/camera-web-component.tsx',
			name: 'CameraWebComponent',
			fileName: 'camera-web-component'
		}
	},
	// assetsInclude: ['**/*.css']
});
