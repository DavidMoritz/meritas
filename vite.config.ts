import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

const config = defineConfig(({ mode }) => {
  const prod = mode === 'prod';
  const isVercel = process.env.VERCEL === '1' || process.env.CI === 'true';

  return {
    plugins: [
      devtools(),
      nitro(),
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      tanstackStart({
        spa: {
          enabled: true,
          prerender: {
            enabled: !isVercel,
            crawlLinks: !isVercel,
            autoSubfolderIndex: !isVercel,
          },
        },
      }),
      viteReact({
        babel: {
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
    ],
    build: {
      minify: true,
      sourcemap: !prod,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './.vitest/vitest.setup.ts',
      include: ['src/**/*.{spec,test}.{ts,tsx}'],
      exclude: [...configDefaults.exclude, './templates'],
      coverage: {
        provider: 'v8',
        reporter: ['json', 'html'],
        include: ['src/**/*'],
        exclude: ['templates/**/*', '**/*.stories.{tsx,jsx}'],
      },
    },
  };
});

export default config;
