import styles from './page.module.css';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import ScrollReveal from '../../components/ScrollReveal';
import AnimatedCounter from '../../components/AnimatedCounter';

export const metadata = {
  title: 'Empresa | SQP Consultoria',
  description: 'Conheça a história, equipe e valores da SQP Consultoria. Mais de 20 anos de excelência em gestão.',
};

export default function Empresa() {
  return (
    <div className={styles.empresaPage}>
      {/* 1. Hero Section (Topo - Bloco Escuro com Imagem + Overlay) */}
      <section className={styles.hero}>
        <div className={styles.imageBackground}>
          <img
            src="/empresa-hero.jpg"
            alt="SQP Consultoria — Nossa Empresa"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-animate-1`}>SQP Consultoria</h1>
            <p className={`${styles.heroSubtitle} hero-animate-2`}>
              Há mais de 20 anos construindo processos eficientes e elevando a gestão dos nossos clientes ao nível que o mercado exige.
            </p>
            <div className={`${styles.heroCtaWrapper} hero-animate-3`}>
              <Link href="/contato" className={styles.heroCtaBtn}>
                Contate-nos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seção Intermediária — Nossa História e Valores (Bloco Claro) */}
      <section className={styles.historySection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.historyContainer}>
              <div className={styles.sectionHeader}>
                <span className={styles.valueTag}>Nossa Trajetória</span>
                <h2>Ética, Profissionalismo e Foco em Resultados</h2>
                <p className={styles.sectionIntro}>
                  Conheça os pilares que consolidaram a SQP Consultoria como referência nacional no suporte técnico para auditorias e certificações internacionais:
                </p>
              </div>

              <div className={styles.twoColumns}>
                <ScrollReveal animation="reveal-left">
                  <div className={`${styles.historyCard} card-interactive`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIcon}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <h3>Nossa História</h3>
                    </div>
                    <p>
                      A SQP Consultoria foi fundada em <strong><AnimatedCounter target={2004} /></strong> para auxiliar pequenas e médias empresas da cadeia de Óleo & Gás e Distribuição a conquistarem certificações internacionais de Sistemas de Gestão.
                    </p>
                    <p>
                      Ao longo dos anos, expandimos nossa atuação para diversos setores industriais e corporativos, com um método prático e focado na redução de desperdícios.
                    </p>
                    <ul className={styles.cardBullets}>
                      <li>Origem e especialista no setor de Óleo & Gás</li>
                      <li>Expansão para múltiplos segmentos da indústria</li>
                      <li>Consultoria focada em conformidade e agilidade</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-right">
                  <div className={`${styles.historyCard} card-interactive`}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardIcon}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h3>Ética & Desempenho</h3>
                    </div>
                    <p>
                      Oferecemos todo o suporte e treinamento necessários para que sua empresa obtenha processos mais eficientes, possibilitando melhores resultados e homologação nos maiores clientes do mercado.
                    </p>
                    <p>
                      Contamos com formatos flexíveis de atendimento presencial, remoto e híbrido, garantindo otimização de custos e a mesma excelência técnica.
                    </p>
                    <ul className={styles.cardBullets}>
                      <li>Atendimento presencial, remoto e híbrido</li>
                      <li>Suporte contínuo para homologação em grandes clientes</li>
                      <li>Auditores sênior com vasta experiência de campo</li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Estatísticas Institucionais (Bloco Escuro Integrado) */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <ScrollReveal stagger={1}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={20} suffix="+" />
                </div>
                <div className={styles.statLabel}>Anos de Mercado</div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={1000} prefix="+" />
                </div>
                <div className={styles.statLabel}>Clientes Certificados</div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className={styles.statLabel}>Aprovação em Auditorias Externas</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Como Podemos Ajudar / Processo em 4 Etapas (Bloco Claro) */}
      <section className={styles.process}>
        <div className="container">
          <ScrollReveal>
            <h2 className={styles.processTitle}>Conheça Como a SQP Pode Te Ajudar</h2>
            <p className={styles.processSubtitle}>
              Uma jornada estruturada em 4 fases estratégicas para levar a sua empresa ao mais alto nível de conformidade e eficiência.
            </p>
          </ScrollReveal>

          <div className={styles.processSteps}>
            <ScrollReveal stagger={1}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Análise</h3>
                <p>Diagnóstico preliminar rigoroso para identificar gargalos operacionais e requisitos normativos aplicáveis ao seu negócio.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Planejamento</h3>
                <p>Elaboração do plano de ação customizado, alinhando cronogramas, recursos e objetivos de certificação.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Implantação</h3>
                <p>Execução prática dos processos com treinamento completo da sua equipe e adequação documental técnica.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={4}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Melhoria Contínua</h3>
                <p>Auditorias internas simuladas e acompanhamento constante para assegurar a conquista e manutenção do selo de qualidade.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Seção "Conheça nossa equipe!" + Formulário (Bloco Escuro Integrado) */}
      <section className={styles.teamSection}>
        <div className="container">
          <ScrollReveal>
            <div className={`${styles.teamCard} card-interactive`}>
              {/* Lado Esquerdo: Copywriting e Diferenciais da Equipe */}
              <div className={styles.teamText}>
                <span className={styles.teamBadge}>Equipe Especializada & Sênior</span>
                <h2>
                  Conheça nossa equipe! Estamos aqui para <span className={styles.highlightText}>Ajudar</span> você a tornar seus processos mais eficientes.
                </h2>
                <p className={styles.teamSub}>
                  Nossa equipe está preparada para oferecer serviços que agreguem valor real ao seu negócio, somando nosso know-how técnico para que seus processos decolem.
                </p>

                <div className={styles.teamBenefits}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Especialistas Sênior com Ampla Vivência</strong>
                      <span>Profissionais experientes nos setores mais exigentes e competitivos do mercado.</span>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Abordagem Prática e Descomplicada</strong>
                      <span>Soluções aplicáveis à realidade do seu dia a dia operacional sem burocracias desnecessárias.</span>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Compromisso Total com a Certificação</strong>
                      <span>Acompanhamos sua empresa desde o primeiro diagnóstico até a auditoria externa final.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Formulário Glassmorphism Escuro */}
              <div className={styles.teamForm}>
                <ContactForm styles={styles} buttonText="Fale Conosco!" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
