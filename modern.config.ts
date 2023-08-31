import { appTools, defineConfig } from '@modern-js/app-tools';

import { expressPlugin } from '@modern-js/plugin-express';
import { bffPlugin } from '@modern-js/plugin-bff';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: 8000,
  },
  server: {
    ssr: true,
    port: 3000,
    routes: {
      entryName1: '/p/test1',
    },
  },
  plugins: [appTools(), expressPlugin(), bffPlugin()],
});
