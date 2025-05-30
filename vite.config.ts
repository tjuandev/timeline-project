import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    build: {
      sourcemap: mode === 'development'
    },
    plugins: [tsconfigPaths(), react()],
    server: {
      open: true,
      port: Number(process.env.VITE_PORT)
    },
    test: {
      deps: {
        optimizer: {
          web: {
            enabled: true
          }
        }
      },
      coverage: {
        provider: 'v8'
      },
      environment: 'jsdom',
      globals: true,
      passWithNoTests: true,
      setupFiles: ['./vitest.setup.ts'],
      testTransformMode: { web: ["/\.tsx?$/"] },
      include: ['src/**/*.test.{ts,tsx}'],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    }
  }
})
