import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

/**
 * Endpoint de healthcheck — usado por monitoramento externo (Better Stack/Pingdom).
 * Não consome o ERP nem outros recursos para evitar falsos positivos.
 */
export function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'oticas-queiroz-web',
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? 'dev',
  });
}
