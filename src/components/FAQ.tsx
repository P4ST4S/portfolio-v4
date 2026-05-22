import { FormattedMessage, useIntl } from "react-intl";

const FAQ = () => {
  const intl = useIntl();
  const questions = [
    "faq.fullstack",
    "faq.production",
    "faq.ai",
    "faq.performance",
    "faq.hire",
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            <FormattedMessage id="faq.title" />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            <FormattedMessage id="faq.subtitle" />
          </p>
        </div>

        {/* GEO rationale: recruiter-style first-person questions mirror ChatGPT prompts and provide direct 40-60 word answers. */}
        <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-700 border-y border-slate-200 dark:border-slate-700">
          {questions.map((id) => (
            <article key={id} className="py-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {intl.formatMessage({ id: `${id}.question` })}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {intl.formatMessage({ id: `${id}.answer` })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
