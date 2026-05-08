'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type ContactFormValues, contactFormSchema } from '@/lib/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  whatsappLink: string;
}

export function ContactForm({ whatsappLink }: ContactFormProps) {
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const messageLength = form.watch('message')?.length ?? 0;
  const isSubmitting = form.formState.isSubmitting;

  const whatsappBase = useMemo(() => new URL(whatsappLink), [whatsappLink]);

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    setIsSent(false);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    if (!response.ok) {
      setSubmitError(data?.message ?? 'Nao foi possivel enviar agora. Tente novamente.');
      return;
    }

    form.reset();
    setIsSent(true);

    const text = [
      `Nome: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Telefone: ${values.phone}` : null,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    const url = new URL(whatsappBase.toString());
    url.searchParams.set('text', text);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="rounded-2xl border border-border-strong bg-bg-elevated/80 p-6 shadow-sm md:p-8">
      <header>
        <p className="text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
          FORMULÁRIO DE CONTATO
        </p>
        <h2 className="mt-3 font-display text-3xl text-brand-primary-900 tracking-tight md:text-4xl">
          Dúvidas, reclamações e sugestões
        </h2>
        <p className="mt-3 text-fg-muted leading-relaxed">
          Preencha o formulário abaixo para entrar em contato com a nossa equipe. Ou, se preferir,
          você também pode nos chamar pelo WhatsApp.
        </p>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="voce@email.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="(77) 99999-9999" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva sua duvida, reclamacao ou sugestao..."
                    className="min-h-36"
                    {...field}
                  />
                </FormControl>
                <FormDescription>{messageLength}/1200 caracteres</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Enviar mensagem
                </>
              )}
            </Button>
          </div>

          {isSent ? (
            <p className="rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
              Mensagem registrada com sucesso. Seu contato foi enviado para o atendimento.
            </p>
          ) : null}
          {submitError ? (
            <p className="rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-danger text-sm">
              {submitError}
            </p>
          ) : null}
        </form>
      </Form>
    </section>
  );
}
