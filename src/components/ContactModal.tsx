import { useState } from "react";
import Modal from "react-modal";
import type { ContactModalProps } from "@/types";
import emailjs from "@emailjs/browser";
import { ImCross } from "react-icons/im";

Modal.setAppElement("#root");

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFeedback(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      setFeedback("✅ Message envoyé avec succès !");
      setName("");
      setEmail("");
      setMessage("");
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
      overlayClassName="fixed inset-0 bg-[#00C4B333] flex justify-center items-start z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
      >
        <ImCross className="text-xl text-red-500" />
      </button>
      <h2 className="text-2xl font-bold mb-4 text-[#00C4B3]">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-2 placeholder-[#00C4B3] text-white"
        />
        <button
          type="submit"
          disabled={sending}
          className="inline-block bg-[#00C4B3] text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 text-sm"
        >
          {sending ? "Envoi en cours..." : "Envoyer"}
        </button>
        {feedback && <p className="text-sm text-center mt-2">{feedback}</p>}
      </form>
    </Modal>
  );
};

export default ContactModal;
