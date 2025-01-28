// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  base: "/vue-nds/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/braia/Documents/proyectosProgramacionWeb/nasaVue-desde-cero/vue-nasa-desde-cero/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJyYWlhXFxcXERvY3VtZW50c1xcXFxwcm95ZWN0b3NQcm9ncmFtYWNpb25XZWJcXFxcbmFzYVZ1ZS1kZXNkZS1jZXJvXFxcXHZ1ZS1uYXNhLWRlc2RlLWNlcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJyYWlhXFxcXERvY3VtZW50c1xcXFxwcm95ZWN0b3NQcm9ncmFtYWNpb25XZWJcXFxcbmFzYVZ1ZS1kZXNkZS1jZXJvXFxcXHZ1ZS1uYXNhLWRlc2RlLWNlcm9cXFxcdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYnJhaWEvRG9jdW1lbnRzL3Byb3llY3Rvc1Byb2dyYW1hY2lvbldlYi9uYXNhVnVlLWRlc2RlLWNlcm8vdnVlLW5hc2EtZGVzZGUtY2Vyby92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgbWVyZ2VDb25maWcsIGRlZmluZUNvbmZpZywgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVDb25maWcsXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxuICAgICAgcm9vdDogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0pLFxuKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxicmFpYVxcXFxEb2N1bWVudHNcXFxccHJveWVjdG9zUHJvZ3JhbWFjaW9uV2ViXFxcXG5hc2FWdWUtZGVzZGUtY2Vyb1xcXFx2dWUtbmFzYS1kZXNkZS1jZXJvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxicmFpYVxcXFxEb2N1bWVudHNcXFxccHJveWVjdG9zUHJvZ3JhbWFjaW9uV2ViXFxcXG5hc2FWdWUtZGVzZGUtY2Vyb1xcXFx2dWUtbmFzYS1kZXNkZS1jZXJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9icmFpYS9Eb2N1bWVudHMvcHJveWVjdG9zUHJvZ3JhbWFjaW9uV2ViL25hc2FWdWUtZGVzZGUtY2Vyby92dWUtbmFzYS1kZXNkZS1jZXJvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlRGV2VG9vbHMoKSxcclxuICBdLFxyXG4gIFxyXG4gIGJhc2U6ICcvdnVlLW5kcy8nXHJcbiAgLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNGMsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQzFlLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0Q4WSxTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUUzZSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKNlEsSUFBTSwyQ0FBMkM7QUFPdFYsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUVBLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJQyxLQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRHBCc1MsSUFBTUMsNENBQTJDO0FBSXhWLElBQU8sd0JBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQUMsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNQyxlQUFjLElBQUksSUFBSSxNQUFNRix5Q0FBZSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJkZWZpbmVDb25maWciLCAiVVJMIiwgIlVSTCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgImRlZmluZUNvbmZpZyIsICJmaWxlVVJMVG9QYXRoIl0KfQo=
