import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import terser from '@rollup/plugin-terser'
import autoprefixer from 'autoprefixer'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [svgr(),react()],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        build: {
            rollupOptions: {
                plugins: [
                    terser({
                        format: {
                            comments: false,
                        },
                    }),
                ],
                output: {
                    manualChunks: id => {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    },
                },
            },
        },
        css: {
            postcss: {
                plugins: [autoprefixer()],
            },
        },
    }
})
