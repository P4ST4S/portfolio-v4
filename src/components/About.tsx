const About = () => (
  <section id="about" className="py-20 md:py-32">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12">
        À propos de moi
      </h2>
      <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-lg p-8 shadow-lg">
        <p className="text-lg text-slate-300 leading-relaxed">
          Étudiant en 5ème année d'école d'ingénieur et passionné par
          l'écosystème du web, je cumule 2 ans d'expérience en tant que
          développeur fullstack. Ma curiosité m'a poussé à maîtriser l'ensemble
          de la chaîne de production logicielle, du design d'interface avec{" "}
          <strong className="text-[#00C4B3]">React</strong> et{" "}
          <strong className="text-[#00C4B3]">TypeScript</strong>, au
          développement d'API robustes avec{" "}
          <strong className="text-[#00C4B3]">NestJS</strong>, jusqu'au
          déploiement continu avec{" "}
          <strong className="text-[#00C4B3]">Docker</strong> et les pipelines
          CI/CD.
        </p>
        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
          J'aime construire des produits qui sont non seulement fonctionnels et
          performants, mais aussi agréables à utiliser. Je suis toujours à la
          recherche de nouveaux défis pour continuer à apprendre et à
          perfectionner mes compétences.
        </p>
      </div>
    </div>
  </section>
);

export default About;
