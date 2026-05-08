import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// Variáveis necessárias para src/env.ts não falhar em teste
process.env.SKIP_ENV_VALIDATION = 'true';
process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '5577988018192';
process.env.NEXT_PUBLIC_PHONE = '557732621344';
process.env.ERP_API_URL = 'http://localhost:4000';
process.env.ERP_API_KEY = 'test-key';
process.env.AUTH_SECRET = 'test-secret-with-at-least-32-characters!!';
