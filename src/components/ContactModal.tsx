import { useRef, useState, type FC, type FormEvent } from "react";
import Modal from "react-modal";
import type { ContactModalProps } from "@/types";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";

Modal.setAppElement("#root");

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);

    try {
      if (!formRef.current) return;

      // Log environment variables for debugging;
      console.log("EMAILJS_PUBLIC_KEY:", EMAILJS_PUBLIC_KEY);
      console.log("EMAILJS_SERVICE_ID:", EMAILJS_SERVICE_ID);
      console.log("EMAILJS_TEMPLATE_ID:", EMAILJS_TEMPLATE_ID);

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-[#1A1A1A] rounded-lg max-w-lg mx-auto p-6 shadow-lg relative mt-20"
      overlayClassName="fixed inset-0 bg-[rgba(0,196,179,0.2)] flex justify-center items-start z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
      >
        <ImCross className="text-xl text-red-500" />
      </button>
      <h2 className="text-2xl font-bold mb-4 text-[#00C4B3]">Contactez-moi</h2>
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
          className="inline-block bg-[#00C4B3] text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 text-sm"
        >
          {sending ? "Envoi en cours..." : "Envoyer"}
        </button>
        {feedback && (
          <p className="text-sm text-center mt-2 text-white">{feedback}</p>
        )}
      </form>
    </Modal>
  );
};

export default ContactModal;
