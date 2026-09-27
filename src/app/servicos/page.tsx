'use client';

import styles from './page.module.css';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import InfiniteCarousel from '../../components/InfiniteCarousel';



export default function Servicos() {
  return (
    <div className={styles.servicosPage}>
      {/* 1. Hero Section (Topo - Bloco Escuro com Imagem + Overlay) */}
      <section className={styles.hero}>
        <div className={styles.imageBackground}>
          <img
            src="/servico-hero.png"
            alt="SQP Consultoria — Nossos Serviços"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-animate-1`}>Nossos Serviços</h1>
            <p className={`${styles.heroSubtitle} hero-animate-2`}>
              Oferecemos soluções completas para tornar os seus processos eficientes, seguros e inovadores.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Resumo de Atuação / Carrossel (Bloco Claro) */}
      <section className={styles.carouselSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.valueTag}>Áreas de Atuação</span>
              <h2>Sua Gestão em Múltiplas Frentes</h2>
              <p className={styles.sectionIntro}>
                Conheça nossas principais linhas de consultoria e soluções tecnológicas focadas em conformidade e performance:
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Carrossel Infinito ocupando a largura inteira */}
        <div className={styles.carouselContainer}>
          <ScrollReveal animation="reveal">
            <InfiniteCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Cards Detalhados dos Serviços — Flip Card 3D */}
      <section className={styles.detailedServicesSection}>
        <div className="container">
          <div className={styles.detailedCards}>

            {/* Card 1: Consultoria ISO */}
            <ScrollReveal stagger={1}>
              <div
                id="consultoria"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>Consultoria em ISOs</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Sua empresa perde contratos por falta de certificação?</p>
                    <p className={styles.backSolution}>Implantamos, estruturamos e mantemos Sistemas de Gestão ISO para que sua empresa conquiste certificações com agilidade e reconhecimento internacional.</p>
                    <ul className={styles.backList}>
                      <li>ISO 9001 — Gestão da Qualidade</li>
                      <li>ISO 14001 — Gestão Ambiental</li>
                      <li>ISO 45001 — Saúde & Segurança Ocupacional</li>
                      <li>ISO 37001 — Antissuborno & Compliance</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Óleo & Gás */}
            <ScrollReveal stagger={2}>
              <div
                id="oleo-gas"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>API Spec Q1 & Óleo e Gás</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Dificuldade em atender os requisitos da Petrobras ou cadeia de suprimentos?</p>
                    <p className={styles.backSolution}>Oferecemos suporte especializado na cadeia de Petróleo & Gás, adequando sua empresa às exigências técnicas dos maiores players do setor.</p>
                    <ul className={styles.backList}>
                      <li>Implementação completa API Spec Q1</li>
                      <li>Requisitos Específicos de Clientes (Petrobras)</li>
                      <li>Adequação técnica de fabricantes de suprimentos</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Automações N8N & IA */}
            <ScrollReveal stagger={3}>
              <div
                id="automacoes"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="19" cy="5" r="2"></circle>
                        <circle cx="19" cy="19" r="2"></circle>
                        <line x1="7" y1="11.5" x2="17" y2="6.5"></line>
                        <line x1="7" y1="12.5" x2="17" y2="17.5"></line>
                        <polyline points="14.5 5.5 17 5 17.5 7.5"></polyline>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>Automações & IA Aplicada</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Sua equipe perde horas em tarefas manuais e repetitivas?</p>
                    <p className={styles.backSolution}>Automatizamos seus processos operacionais e integramos Inteligência Artificial para modernizar a gestão e reduzir custos com retrabalho.</p>
                    <ul className={styles.backList}>
                      <li>Workflows Inteligentes Automatizados (N8N)</li>
                      <li>IA dedicada para análise e suporte a rotinas</li>
                      <li>Integração de sistemas e redução de custos</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Sistemas e Produtos */}
            <ScrollReveal stagger={1}>
              <div
                id="sistemas"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>Sistemas e Produtos</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Processos desintegrados gerando retrabalho e desperdício?</p>
                    <p className={styles.backSolution}>Estruturamos Sistemas de Gestão Integrados e certificamos a conformidade dos seus produtos para ampliar mercados e garantir qualidade consistente.</p>
                    <ul className={styles.backList}>
                      <li>Sistemas de Gestão Integrado (SGI)</li>
                      <li>Certificação de Produto (PBQP-H, etc)</li>
                      <li>Padronização e otimização de fluxos</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 5: Auditoria & Fornecedores */}
            <ScrollReveal stagger={2}>
              <div
                id="auditoria"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>Auditoria & Fornecedores</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Auditoria externa se aproximando e sua empresa não está preparada?</p>
                    <p className={styles.backSolution}>Realizamos auditorias simuladas de 1ª e 2ª parte e qualificamos seus fornecedores para garantir conformidade antes que os auditores cheguem.</p>
                    <ul className={styles.backList}>
                      <li>Auditorias de Gap Analysis e Conformidade</li>
                      <li>Auditorias em Cadeia de Suprimentos</li>
                      <li>Qualificação e Homologação Técnica</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 6: Treinamentos & Inspeção */}
            <ScrollReveal stagger={3}>
              <div
                id="treinamentos"
                className={styles.flipCardWrapper}
                onClick={(e) => e.currentTarget.classList.toggle(styles.flipped)}
              >
                <div className={styles.flipCardInner}>
                  {/* FRENTE */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontIconWrap}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h3 className={styles.frontTitle}>Treinamentos & Inspeção</h3>
                    <span className={styles.frontHint}>Passe o mouse para saber mais</span>
                  </div>
                  {/* VERSO */}
                  <div className={styles.flipCardBack}>
                    <p className={styles.backPain}>Equipe sem capacitação técnica para atender normas regulatórias?</p>
                    <p className={styles.backSolution}>Capacitamos suas equipes com ferramentas práticas da qualidade e conduzimos inspeções de segurança para plena conformidade normativa.</p>
                    <ul className={styles.backList}>
                      <li>Ferramentas da Qualidade (MASP, Ishikawa, 5W2H)</li>
                      <li>Formação de Auditores Internos</li>
                      <li>Inspeções Regulatórias de Segurança (NR 13 / NR 35)</li>
                    </ul>
                    <Link href="/contato" className={styles.backBtn} onClick={(e) => e.stopPropagation()}>
                      Ver solução completa →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. Call to Action (Bloco Claro) */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal>
            <div className={`${styles.ctaBox} card-interactive`}>
              <h2>Interessado em nossos serviços?</h2>
              <p>Conheça como a SQP pode ajudar sua Empresa a alcançar melhores resultados com inovação e segurança!</p>
              <Link href="/contato" className="btn btn-accent">Agende uma visita estratégica</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
