import styles from './page.module.css';
import ContactForm from '../../components/ContactForm';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: 'Contato | SQP Consultoria',
  description: 'Entre em contato com a SQP Consultoria e solicite seu orçamento sem compromisso.',
};

export default function Contato() {
  return (
    <div className={styles.contatoPage}>
      {/* 1. Hero Section (Topo - Bloco Escuro com Imagem + Overlay) */}
      <section className={styles.hero}>
        <div className={styles.imageBackground}>
          <img
            src="/empresa-hero.jpg"
            alt="SQP Consultoria — Contato"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-animate-1`}>Contate-nos</h1>
            <p className={`${styles.heroSubtitle} hero-animate-2`}>
              Estamos prontos para entender seu desafio e elevar a gestão da sua empresa ao próximo nível.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Seção Principal (Dark Glassmorphism) */}
      <section className={styles.contatoSection}>
        <div className="container">
          <div className={styles.contatoGrid}>

            {/* Informações de Contato e Mapa (Coluna Esquerda) */}
            <div className={styles.infoCol}>
              {/* Box: Horários */}
              <ScrollReveal stagger={1}>
                <div className={`${styles.infoBox} card-interactive`}>
                  <div className={styles.boxHeader}>
                    <div className={styles.boxIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <h2>Horário de Atendimento</h2>
                  </div>
                  <ul>
                    <li>
                      <strong>Segunda a Sexta:</strong>
                      <span>08:00 – 17:00</span>
                    </li>
                    <li>
                      <strong>Sábado e Domingo:</strong>
                      <span>Fechado</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Box: Canais de Contato */}
              <ScrollReveal stagger={2}>
                <div className={`${styles.infoBox} card-interactive`}>
                  <div className={styles.boxHeader}>
                    <div className={styles.boxIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <h2>Nossos Contatos</h2>
                  </div>
                  <ul>
                    <li>
                      <strong>Telefone / WhatsApp:</strong>
                      <a href="https://wa.me/5511912687464" target="_blank" rel="noopener noreferrer">(11) 91268-7464</a>
                    </li>
                    <li>
                      <strong>E-mail Direto:</strong>
                      <a href="mailto:contato@sqp.com.br">contato@sqp.com.br</a>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Box: Mapa */}
              <ScrollReveal stagger={3}>
                <div className={styles.mapBox}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.745814522434!2d-46.6570656!3d-23.5617654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1714151234567!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '14px', display: 'block' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização SQP Consultoria"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>

            {/* Formulário de Contato (Coluna Direita) */}
            <div className={styles.formCol}>
              <ScrollReveal animation="reveal-right">
                <div className={styles.formBox}>
                  <h2>Envie sua Mensagem</h2>
                  <ContactForm styles={styles} buttonText="Enviar Mensagem Agora" />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
