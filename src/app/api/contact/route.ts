import { NextResponse } from 'next/server';

// Simples In-Memory Rate Limiting para fins de segurança
// Atenção: Em produção (como serverless em Vercel), isso pode resetar em cada instância.
// Recomenda-se o uso de Upstash Redis para rate limiting em produção real.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS = 5; // Máx 5 requisições por IP por minuto

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowData = rateLimitMap.get(ip);

  if (!windowData) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - windowData.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (windowData.count >= MAX_REQUESTS) {
    return false;
  }

  windowData.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // Pegar o IP do usuário para Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown_ip';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente mais tarde.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nome, email, telefone, empresa, mensagem } = body;

    // Sanitização e Validação Básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de e-mail inválido.' },
        { status: 400 }
      );
    }

    // AQUI: Integrar com provedor de email (Nodemailer, SendGrid, Resend)
    // Exemplo: await sendEmail({ to: 'contato@sqp.com.br', subject: 'Novo Contato', body: ... });

    // Simulando o envio de e-mail por 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro no envio do formulário:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro ao processar sua solicitação.' },
      { status: 500 }
    );
  }
}
