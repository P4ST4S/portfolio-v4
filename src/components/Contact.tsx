const Contact = () => (
  <section id="contact" className="py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
        Intéressé par mon profil ?
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
        Je suis actuellement à la recherche d'opportunités Freelance. N'hésitez
        pas à me contacter.
      </p>
      <a
        href="mailto:antoine.rospars@epitech.eu"
        className="inline-block bg-[#00C4B3] text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 text-lg"
      >
        Envoyer un email
      </a>
    </div>
  </section>
);

export default Contact;
