import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetWind3(),
    // ...custom presets
  ],
})