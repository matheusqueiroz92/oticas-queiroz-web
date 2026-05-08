import { env } from '@/env';
import { contactFormSchema } from '@/lib/contact';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function makeRequestId() {
  return `ctt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function POST(request: Request) {
  const requestId = makeRequestId();

  try {
    const payload = await request.json();
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Dados invalidos. Revise os campos e tente novamente.',
          requestId,
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    if (!env.CONTACT_WEBHOOK_URL) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Canal de contato indisponivel no momento. Tente novamente mais tarde.',
          requestId,
        },
        { status: 503 },
      );
    }

    const body = {
      requestId,
      source: 'site-contato',
      createdAt: new Date().toISOString(),
      // subject: parsed.data.subject,
      // subjectLabel: subjectLabels[parsed.data.subject],
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    };

    const webhookRes = await fetch(env.CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(env.CONTACT_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${env.CONTACT_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!webhookRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Nao foi possivel registrar seu contato agora. Tente novamente em instantes.',
          requestId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: 'Contato registrado com sucesso.', requestId });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: 'Erro interno ao processar o contato.',
        requestId,
      },
      { status: 500 },
    );
  }
}
