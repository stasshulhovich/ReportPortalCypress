import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/ui/#login',
    excludeSpecPattern: '*.html',
    supportFile: 'cypress/support/index.ts',
  },
});
