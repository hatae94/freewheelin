import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
      { find: 'apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'providers', replacement: path.resolve(__dirname, 'src/providers') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
});
