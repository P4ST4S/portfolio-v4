import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FormattedMessage, useIntl } from "react-intl";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const intl = useIntl();
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
        },
      );

      setFeedback("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setFeedback("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            <FormattedMessage id="contact.title" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <FormattedMessage id="contact.subtitle" />
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-[#00C4B3] text-center">
            <FormattedMessage id="contact.formTitle" />
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder={intl.formatMessage({
                id: "contact.namePlaceholder",
              })}
              required
              className="w-full border border-slate-300 dark:border-slate-600 rounded px-4 py-2 placeholder:text-slate-400 dark:placeholder:text-[#00C4B3] text-slate-900 dark:text-white bg-white/80 dark:bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              placeholder={intl.formatMessage({
                id: "contact.emailPlaceholder",
              })}
              required
              className="w-full border border-slate-300 dark:border-slate-600 rounded px-4 py-2 placeholder:text-slate-400 dark:placeholder:text-[#00C4B3] text-slate-900 dark:text-white bg-white/80 dark:bg-transparent"
            />
            <textarea
              name="message"
              placeholder={intl.formatMessage({
                id: "contact.messagePlaceholder",
              })}
              required
              rows={5}
              className="w-full border border-slate-300 dark:border-slate-600 rounded px-4 py-2 placeholder:text-slate-400 dark:placeholder:text-[#00C4B3] text-slate-900 dark:text-white bg-white/80 dark:bg-transparent"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#00C4B3] text-slate-900 dark:text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              {sending ? (
                <FormattedMessage id="contact.sendingButton" />
              ) : (
                <FormattedMessage id="contact.sendButton" />
              )}
            </button>
            {feedback && (
              <p className="text-sm text-center mt-2 text-slate-700 dark:text-white">
                {feedback === "success" ? (
                  <FormattedMessage id="contact.successMessage" />
                ) : (
                  <FormattedMessage id="contact.errorMessage" />
                )}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
