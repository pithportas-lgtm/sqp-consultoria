"use client";

import { useState } from 'react';

export default function NewsletterForm({ styles }: { styles: any }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(result.message || "Inscrito com sucesso!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(result.error || "Ocorreu um erro.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Erro na conexão. Tente novamente.");
    }
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      {status === "success" && (
        <div style={{ color: "#25D366", fontSize: "0.9rem", marginBottom: "5px" }}>
          {message}
        </div>
      )}
      {status === "error" && (
        <div style={{ color: "#ff4d4d", fontSize: "0.9rem", marginBottom: "5px" }}>
          {message}
        </div>
      )}
      <input type="text" name="nome" placeholder="Nome" required />
      <input type="email" name="email" placeholder="E-mail" required />
      <button type="submit" className="btn btn-accent" disabled={status === "loading"}>
        {status === "loading" ? "Registrando..." : "Registre-se"}
      </button>
    </form>
  );
}
