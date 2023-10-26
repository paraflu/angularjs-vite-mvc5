// vite.config.js
export default {
    appType: 'custom',
    build: {
        manifest: true,
        outDir: './dist',
        sourcemap: true,
        emptyOutDir: true,
        assetsDir: '',
        rollupOptions: {
            input: {
                main: './index.ts',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            clientPort: 5173
        }
    },
}