'use strict';

/**
 * Na Vercel (e muitos CIs), `pnpm install` roda com NODE_ENV=production e não
 * instala devDependencies — então `lefthook` não existe e `lefthook install`
 * quebrava o deploy. Hooks Git só fazem sentido em máquina de desenvolvimento.
 */
if (process.env.VERCEL || process.env.CI) {
  process.exit(0);
}

try {
  require('child_process').execSync('lefthook install', { stdio: 'inherit' });
} catch {
  process.exit(0);
}
