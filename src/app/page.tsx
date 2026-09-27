import styles from './page.module.css';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section — Vídeo de Fundo + staggered entrance */}
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-animate-1`}>SQP Consultoria</h1>
            <p className={`${styles.heroSubtitle} hero-animate-2`}>
              Sua gestão, no nível que o mercado reconhece.
            </p>
            <div className={`${styles.heroCtaWrapper} hero-animate-3`}>
              <Link href="/contato" className={styles.heroCtaBtn}>
                Contate-nos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Secundária - Pilares de Valor (Texto derivado da apresentação anterior) */}
      <section className={styles.valueSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.valueCard}>
              <div className={styles.valueHeader}>
                <span className={styles.valueTag}>Nossa Proposta de Valor</span>
                <h2>Processos Eficientes e Resultados Concretos</h2>
                <p className={styles.valueIntro}>
                  Ajudamos sua empresa a alcançar excelência operacional e conformidade através de soluções personalizadas e estruturadas:
                </p>
              </div>

              <div className={styles.valueGrid}>
                <Link href="/servicos#sistemas" className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <div className={styles.valueItemContent}>
                    <h3>Sistemas de Gestão Estratégicos</h3>
                    <p>Implantação focada em expandir operações, conquistar novos clientes e garantir certificações de alto impacto.</p>
                  </div>
                </Link>

                <Link href="/empresa" className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className={styles.valueItemContent}>
                    <h3>Eficácia e Desempenho</h3>
                    <p>Elevação do desempenho tecnológico e da eficácia organizacional com redução de desperdícios.</p>
                  </div>
                </Link>

                <Link href="/servicos#treinamentos" className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div className={styles.valueItemContent}>
                    <h3>Ferramentas e Métodos Práticos</h3>
                    <p>Capacitação e suporte técnico contínuo para auxiliar sua equipe na obtenção dos melhores resultados.</p>
                  </div>
                </Link>

                <Link href="/empresa" className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className={styles.valueItemContent}>
                    <h3>Planejamento e Execução Segura</h3>
                    <p>Processos bem estruturados com equipe sênior experiente nos mais variados segmentos de mercado.</p>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Estatísticas animadas */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <ScrollReveal stagger={1}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={1000} prefix="+" />
                </div>
                <div className={styles.statLabel}>Clientes Certificados</div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={20} suffix="+" />
                </div>
                <div className={styles.statLabel}>Anos de Mercado</div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={3}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={57} prefix="R$ " suffix=" M" />
                </div>
                <div className={styles.statLabel}>Gerados para nossos clientes em resultados</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className={styles.services}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.servicesHeader}>
              <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
              <p className={styles.servicesSubtitle}>
                Excelência técnica e suporte estratégico para certificar, estruturar e capacitar sua organização.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            <ScrollReveal stagger={1} className={styles.featuredReveal}>
              <Link href="/servicos#consultoria" className={`${styles.serviceCard} ${styles.featuredServiceCard} card-interactive`}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.featuredIcon}`}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.featuredTitle}>Consultoria e Auditoria</h3>
                  </div>
                </div>
                <p className={styles.featuredDesc}>
                  Estruturação completa e auditoria preparatória para que sua empresa conquiste certificações com agilidade e reconhecimento internacional.
                </p>
                <ul className={styles.featuredList}>
                  <li>ISO 9001 — Gestão da Qualidade</li>
                  <li>ISO 14001 — Gestão Ambiental</li>
                  <li>ISO 45001 — Saúde e Segurança Ocupacional</li>
                  <li>SA 8000 — Responsabilidade Social</li>
                  <li>API Spec Q1 — Indústria de Óleo e Gás</li>
                </ul>
                <div className={styles.featuredFooter}>
                  <div className={styles.featuredFooterLine}></div>
                  <div className={styles.featuredFooterContent}>
                    <div className={styles.featuredStat}>
                      <span className={styles.featuredStatNum}>+20</span>
                      <span className={styles.featuredStatLabel}>anos auditando empresas no Brasil</span>
                    </div>
                    <div className={styles.featuredStatDivider}></div>
                    <div className={styles.featuredStat}>
                      <span className={styles.featuredStatNum}>100%</span>
                      <span className={styles.featuredStatLabel}>de aprovação nas auditorias externas</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <div className={styles.secondaryServicesCol}>
              <ScrollReveal stagger={2}>
                <Link href="/servicos#sistemas" className={`${styles.serviceCard} ${styles.secondaryCard} card-interactive`}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <h3>Sistemas e Produtos</h3>
                  </div>
                  <ul>
                    <li>Sistemas de Gestão Integrado</li>
                    <li>Certificação de produto</li>
                  </ul>
                </Link>
              </ScrollReveal>

              <ScrollReveal stagger={3}>
                <Link href="/servicos#treinamentos" className={`${styles.serviceCard} ${styles.secondaryCard} card-interactive`}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <h3>Treinamentos e Inspeção</h3>
                  </div>
                  <ul>
                    <li>Treinamentos Específicos</li>
                    <li>Inspeção de Segurança</li>
                  </ul>
                </Link>
              </ScrollReveal>

              <ScrollReveal stagger={4}>
                <Link href="/servicos#automacoes" className={`${styles.serviceCard} ${styles.secondaryCard} card-interactive`}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="19" cy="5" r="2"></circle>
                        <circle cx="19" cy="19" r="2"></circle>
                        <line x1="7" y1="11.5" x2="17" y2="6.5"></line>
                        <line x1="7" y1="12.5" x2="17" y2="17.5"></line>
                        <polyline points="14.5 5.5 17 5 17.5 7.5"></polyline>
                      </svg>
                    </div>
                    <h3>Automações & IA Aplicada</h3>
                  </div>
                  <ul>
                    <li>Automação de processos ponta a ponta</li>
                    <li>Gestão interna otimizada com N8N</li>
                    <li>IA dedicada à análise e execução interna</li>
                  </ul>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className={styles.servicesLink}>
              <Link href="/servicos" className="btn">Ver todos os serviços</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Consulta Estratégica Section (Dark Mode Integrado & Copywriting Persuasivo) */}
      <section className={styles.freeConsultation}>
        <div className="container">
          <ScrollReveal>
            <div className={`${styles.consultationCard} card-interactive`}>
              {/* Lado Esquerdo: Copywriting e Benefícios */}
              <div className={styles.consultationText}>
                <span className={styles.consultationBadge}>Sua Empresa em Outro Nível</span>
                <h2>
                  Dê o próximo passo na gestão da sua empresa e <span className={styles.highlightText}>Agende</span> sua <span className={styles.highlightText}>Consulta Estratégica</span>
                </h2>
                <p className={styles.consultationSub}>
                  Descubra gargalos operacionais e oportunidades reais de crescimento com quem entende do seu mercado.
                </p>

                <div className={styles.consultationBenefits}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Diagnóstico inicial sem custos</strong>
                      <span>Avaliação preliminar precisa sem compromisso financeiro.</span>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Alinhamento direto com especialistas sênior</strong>
                      <span>Diálogo técnico de alto nível com profissionais de mais de 20 anos de mercado.</span>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <strong>Soluções sob medida para o seu momento operacional</strong>
                      <span>Planejamento customizado para maximizar a eficiência e a lucratividade do seu negócio.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Formulário Glass / Clean Escuro */}
              <div className={styles.consultationForm}>
                <ContactForm styles={styles} buttonText="Quero minha consulta gratuita" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
