import React from 'react';
import Link from 'next/link';
import styles from './InfiniteCarousel.module.css';

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const items: CarouselItem[] = [
  {
    id: 'iso9001',
    title: 'ISO 9001',
    subtitle: 'Gestão da Qualidade',
    description: 'Excelência construída em cada detalhe dos seus processos operacionais.',
    image: '/imagem/ISO 9001.png',
    link: '/servicos#consultoria'
  },
  {
    id: 'iso14001',
    title: 'ISO 14001',
    subtitle: 'Gestão Ambiental',
    description: 'Sustentabilidade que gera valor sustentável para a sua organização.',
    image: '/imagem/ISO 14001 (Gestão Ambiental).png',
    link: '/servicos#consultoria'
  },
  {
    id: 'iso27001',
    title: 'ISO 27001',
    subtitle: 'Segurança da Informação',
    description: 'Segurança robusta que protege seus dados e a privacidade.',
    image: '/imagem/ISO 27001 (Segurança da Informação).png',
    link: '/servicos#consultoria'
  },
  {
    id: 'iso45001',
    title: 'ISO 45001',
    subtitle: 'Saúde e Segurança',
    description: 'Ambiente de trabalho seguro que gera produtividade e bem-estar.',
    image: '/imagem/ISO 45001 (Saúde e Segurança Ocupacional.png',
    link: '/servicos#consultoria'
  },
  {
    id: 'iso37001',
    title: 'ISO 37001',
    subtitle: 'Antissuborno & Compliance',
    description: 'Integridade, transparência e tolerância zero a irregularidades.',
    image: '/imagem/ISO 37001 (Antissuborno e Compliance).png',
    link: '/servicos#consultoria'
  },
  {
    id: 'automacoes',
    title: 'Automações N8N',
    subtitle: 'Workflows Inteligentes',
    description: 'Otimização de processos ponta a ponta com integrações ágeis.',
    image: '/imagem/N8N.png',
    link: '/servicos#automacoes'
  },
  {
    id: 'ia',
    title: 'IA Aplicada',
    subtitle: 'Análise de Dados e IA',
    description: 'IA sob governança para tomada de decisões controladas e precisas.',
    image: '/imagem/IA.png',
    link: '/servicos#automacoes'
  },
  {
    id: 'apiq1',
    title: 'API Spec Q1',
    subtitle: 'Indústria de Petróleo',
    description: 'Alto padrão em produtos para a complexa cadeia de óleo e gás.',
    image: '/imagem/API Spec Q1 (Óleo e Gás).png',
    link: '/servicos#consultoria'
  },
  {
    id: 'sgi',
    title: 'Consultoria SGI',
    subtitle: 'Gestão Integrada',
    description: 'Integração perfeita entre Qualidade, Meio Ambiente e Segurança.',
    image: '/imagem/Consultoria em SGI (Sistema de Gestão Integrado).png',
    link: '/servicos#sistemas'
  },
  {
    id: 'certificacao-produto',
    title: 'Certificação de Produto',
    subtitle: 'Conformidade Técnica',
    description: 'Aprovação e homologação técnica de produtos em órgãos reguladores.',
    image: '/imagem/Certificação de Produto.png',
    link: '/servicos#sistemas'
  },
  {
    id: 'auditoria',
    title: 'Auditoria de Sistemas',
    subtitle: 'Avaliação & Diagnóstico',
    description: 'Auditorias internas rigorosas para garantir conformidade contínua.',
    image: '/imagem/Auditoria de Sistemas de Gestão.png',
    link: '/servicos#auditoria'
  },
  {
    id: 'fornecedores',
    title: 'Avaliação de Fornecedores',
    subtitle: 'Gestão de Suprimentos',
    description: 'Qualificação e auditoria de 2ª parte em fornecedores estratégicos.',
    image: '/imagem/Avaliação de Fornecedores.png',
    link: '/servicos#auditoria'
  }
];

export default function InfiniteCarousel() {
  // Duplicar os itens para o efeito infinito
  const carouselItems = [...items, ...items];

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselTrack}>
        {carouselItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className={styles.card}>
            <img 
              src={item.image} 
              alt={item.title} 
              className={styles.cardImg} 
              loading="lazy"
            />
            <div className={styles.cardOverlay}></div>
            
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardSubtitle}>{item.subtitle}</div>
              <div className={styles.cardDesc}>{item.description}</div>
              
              <div style={{ marginTop: 'auto' }}>
                <Link href={item.link} className={styles.cardButton}>
                  Conhecer a consultoria
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
