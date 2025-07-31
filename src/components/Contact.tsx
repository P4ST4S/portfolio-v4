import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setFeedback("✅ Message envoyé avec succès !");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setFeedback("❌ Une erreur s'est produite.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Intéressé par mon profil ?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'opportunités Freelance.
            N'hésitez pas à me contacter.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-[#00C4B3] text-center">Contactez-moi</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Votre e-mail"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white bg-transparent"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#00C4B3] text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {sending ? "Envoi en cours..." : "Envoyer un email"}
            </button>
            {feedback && (
              <p className="text-sm text-center mt-2 text-white">{feedback}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
