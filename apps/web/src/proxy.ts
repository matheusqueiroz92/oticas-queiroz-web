import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy do Next.js 16+ (substitui middleware.ts).
 *
 * Hoje cuida de:
 * - Proteção das rotas /minha-conta/* (redirect para /login se não autenticado)
 *
 * Auth ainda não está plugado (Fase 4 do roadmap). Descomente o bloco quando ativar sessão.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/minha-conta')) {
    // const token = request.cookies.get('session')?.value;
    // if (!token) {
    //   const url = request.nextUrl.clone();
    //   url.pathname = '/login';
    //   url.searchParams.set('callbackUrl', pathname);
    //   return NextResponse.redirect(url);
    // }
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: ['/minha-conta/:path*'],
};
