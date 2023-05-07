import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.ts',
    baseUrl: 'http://localhost:8080/ui/#login',
  },
});
