import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { injectHtml } from 'vite-plugin-html';

export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      'vikasit-email-editor/lib/style.css': path.resolve(__dirname, 'package.json'), // 没有用的，只是防止css 404报错
      'vikasit-email-extensions/lib/style.css': path.resolve(__dirname, 'package.json'), // 没有用的，只是防止css 404报错
      react: path.resolve('./node_modules/react'),
      'react-final-form': path.resolve(__dirname, './node_modules/react-final-form'),
      '@demo': path.resolve(__dirname, './src'),
      '@extensions': path.resolve('../packages/vikasit-email-extensions/src'),
      '@core': path.resolve('../packages/vikasit-email-core/src'),
      '@arco-themes': path.resolve('./node_modules/@arco-themes'),
      '@': path.resolve('../packages/vikasit-email-editor/src'),
      'vikasit-email-core': path.resolve('../packages/vikasit-email-core/src/index.tsx'),
      'vikasit-email-editor/lib/locales.json': path.resolve(
        '../packages/vikasit-email-editor/public/locales.json',
      ),
      'vikasit-email-localization': path.resolve('../packages/vikasit-email-localization'),
      'vikasit-email-editor': path.resolve('../packages/vikasit-email-editor/src/index.tsx'),
      'vikasit-email-extensions': path.resolve(
        '../packages/vikasit-email-extensions/src/index.tsx',
      ),
      '@arco-design/web-react/dist/css/arco.css': path.resolve(
        './node_modules/@arco-design/web-react/dist/css/arco.css',
      ),
    },
  },

  define: {},
  esbuild: {
    jsxInject: 'import "@arco-design/web-react/dist/css/arco.css";',
  },
  build: {
    minify: 'terser',
    manifest: true,
    sourcemap: true,
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/\/node_modules\/html2canvas\/.*/.test(id)) {
            return 'html2canvas';
          }
          if (/\/node_modules\/lodash\/.*/.test(id)) {
            return 'lodash';
          }
          if (/\/node_modules\/mjml-browser\/.*/.test(id)) {
            return 'mjml-browser';
          }
          if (/vikasit-email.*/.test(id)) {
            return 'vikasit-email-editor';
          }
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'dashes',
    },
    preprocessorOptions: {
      scss: {},
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),

    injectHtml({
      data: {
        buildTime: `<meta name="updated-time" content="${new Date().toUTCString()}" />`,
      },
    }),
  ].filter(Boolean),
});
