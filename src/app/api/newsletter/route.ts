import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; 
const MAX_REQUESTS = 5;

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
    const ip = request.headers.get('x-forwarded-for') || 'unknown_ip';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente mais tarde.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nome, email } = body;

    if (!nome || !email) {
      return NextResponse.json(
        { error: 'Nome e E-mail são obrigatórios.' },
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

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Inscrito na newsletter com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro na inscrição da newsletter:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro ao processar sua solicitação.' },
      { status: 500 }
    );
  }
}
