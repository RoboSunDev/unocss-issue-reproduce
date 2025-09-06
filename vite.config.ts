import { defineConfig } from "vite";
import UnoCSS from 'unocss/vite'
import Uni from '@uni-helper/plugin-uni';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Uni(),
    UnoCSS(),
  ],
});
