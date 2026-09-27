"use client";

import { useState } from 'react';

export default function ContactForm({ styles, buttonText = "Enviar Mensagem" }: { styles: any, buttonText?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(result.message || "Mensagem enviada com sucesso!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Erro na conexão. Tente novamente.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {status === "success" && (
        <div style={{ color: "green", marginBottom: "15px", fontWeight: "bold" }}>
          {message}
        </div>
      )}
      {status === "error" && (
        <div style={{ color: "red", marginBottom: "15px", fontWeight: "bold" }}>
          {message}
        </div>
      )}
      
      <div className={styles.formGroup || ""}>
        {styles.formGroup && <label htmlFor="nome">Nome</label>}
        <input type="text" id="nome" name="nome" placeholder="Nome" required />
      </div>
      
      <div className={styles.formGroup || ""}>
        {styles.formGroup && <label htmlFor="email">E-mail</label>}
        <input type="email" id="email" name="email" placeholder="E-mail" required />
      </div>
      
      <div className={styles.formGroup || ""}>
        {styles.formGroup && <label htmlFor="telefone">Telefone</label>}
        <input type="tel" id="telefone" name="telefone" placeholder="Telefone" required />
      </div>
      
      <div className={styles.formGroup || ""}>
        {styles.formGroup && <label htmlFor="empresa">Empresa</label>}
        <input type="text" id="empresa" name="empresa" placeholder="Empresa" />
      </div>
      
      <div className={styles.formGroup || ""}>
        {styles.formGroup && <label htmlFor="mensagem">Mensagem</label>}
        <textarea id="mensagem" name="mensagem" placeholder="Mensagem" rows={5} required></textarea>
      </div>
      
      <button type="submit" className="btn btn-accent" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : buttonText}
      </button>
    </form>
  );
}
