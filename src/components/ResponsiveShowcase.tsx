import { useRef } from "react";

/* TODO: Uncomment and implement the grid layout for projects when images are available */

// interface ResponsiveProject {
//   id: number;
//   title: string;
//   description: string;
//   desktopImage: string;
//   tabletImage: string;
//   mobileImage: string;
//   url: string;
//   technologies: string[];
// }

// const responsiveProjects: ResponsiveProject[] = [
//   {
//     id: 1,
//     title: "TrioSigno",
//     description:
//       "Plateforme de gestion de projets avec interface responsive adaptée à tous les écrans",
//     desktopImage: "/images/triosigno-desktop.jpg",
//     tabletImage: "/images/triosigno-tablet.jpg",
//     mobileImage: "/images/triosigno-mobile.jpg",
//     url: "https://triosigno.com/",
//     technologies: ["React", "TypeScript", "TailwindCSS", "Responsive Design"],
//   },
//   {
//     id: 2,
//     title: "Francilienne de Miroiterie",
//     description:
//       "Site vitrine optimisé pour une expérience fluide sur mobile et desktop",
//     desktopImage: "/images/miroiterie-desktop.jpg",
//     tabletImage: "/images/miroiterie-tablet.jpg",
//     mobileImage: "/images/miroiterie-mobile.jpg",
//     url: "https://francilienne-de-miroiterie.com/",
//     technologies: ["React", "SCSS", "Mobile First", "UX Design"],
//   },
//   {
//     id: 3,
//     title: "Portfolio Personnel",
//     description:
//       "Design moderne et responsive mettant en valeur mes compétences développeur",
//     desktopImage: "/images/portfolio-desktop.jpg",
//     tabletImage: "/images/portfolio-tablet.jpg",
//     mobileImage: "/images/portfolio-mobile.jpg",
//     url: "https://antoinerospars.dev/",
//     technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
//   },
// ];

// const DeviceMockup = ({
//   type,
//   image,
//   isActive,
//   onClick,
// }: {
//   type: "desktop" | "tablet" | "mobile";
//   image: string;
//   isActive: boolean;
//   onClick: () => void;
// }) => {
//   const getDeviceClasses = () => {
//     switch (type) {
//       case "desktop":
//         return {
//           container:
//             "w-64 h-40 relative cursor-pointer transform transition-all duration-300 hover:scale-105",
//           screen:
//             "w-full h-32 bg-slate-800 rounded-t-lg border-2 border-slate-600 overflow-hidden",
//           base: "w-full h-8 bg-slate-700 rounded-b-lg relative",
//           stand:
//             "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-slate-600 rounded-full",
//         };
//       case "tablet":
//         return {
//           container:
//             "w-48 h-64 relative cursor-pointer transform transition-all duration-300 hover:scale-105",
//           screen:
//             "w-full h-full bg-slate-800 rounded-2xl border-4 border-slate-600 overflow-hidden p-2",
//           base: "",
//           stand: "",
//         };
//       case "mobile":
//         return {
//           container:
//             "w-32 h-56 relative cursor-pointer transform transition-all duration-300 hover:scale-105",
//           screen:
//             "w-full h-full bg-slate-800 rounded-3xl border-4 border-slate-600 overflow-hidden p-1",
//           base: "",
//           stand: "",
//         };
//     }
//   };

//   const classes = getDeviceClasses();

//   return (
//     <div
//       className={`${classes.container} ${
//         isActive ? "ring-2 ring-[#00C4B3] ring-opacity-50" : ""
//       }`}
//       onClick={onClick}
//     >
//       <div className={classes.screen}>
//         <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded flex items-center justify-center">
//           <div className="text-slate-400 text-xs font-medium">
//             {type.charAt(0).toUpperCase() + type.slice(1)}
//           </div>
//         </div>
//       </div>
//       {classes.base && (
//         <div className={classes.base}>
//           {classes.stand && <div className={classes.stand}></div>}
//         </div>
//       )}
//     </div>
//   );
// };

const ResponsiveShowcase = () => {
  // const [activeProject, setActiveProject] = useState(0);
  // const [activeDevice, setActiveDevice] = useState<
  //   "desktop" | "tablet" | "mobile"
  // >("desktop");
  // const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           responsiveProjects.forEach((_, index) => {
  //             setTimeout(() => {
  //               setVisibleCards((prev) => [...prev, index]);
  //             }, index * 200);
  //           });
  //           observer.disconnect();
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  // const currentProject = responsiveProjects[activeProject];

  return (
    <section
      ref={sectionRef}
      id="responsive-showcase"
      className="py-20 md:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#1F1F1F] to-[#1A1A1A] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C4B3]/3 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 relative inline-block">
            Design Responsive - Expertise Multi-Device
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Mes projets s'adaptent parfaitement à tous les écrans. Découvrez
            comment mes interfaces offrent une expérience utilisateur optimale
            sur desktop, tablette et mobile.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {responsiveProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  activeProject === index
                    ? "border-[#00C4B3] shadow-lg shadow-[#00C4B3]/20"
                    : "border-slate-700 hover:border-slate-600"
                }`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#00C4B3]/10 text-[#00C4B3] text-xs rounded-full border border-[#00C4B3]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#00C4B3] hover:text-[#00B5A5] transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  Voir le projet
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-100 mb-2">
              {currentProject.title}
            </h3>
            <p className="text-slate-400">{currentProject.description}</p>
          </div>

          <div className="flex justify-center items-end gap-8 mb-8">
            <DeviceMockup
              type="desktop"
              image={currentProject.desktopImage}
              isActive={activeDevice === "desktop"}
              onClick={() => setActiveDevice("desktop")}
            />
            <DeviceMockup
              type="tablet"
              image={currentProject.tabletImage}
              isActive={activeDevice === "tablet"}
              onClick={() => setActiveDevice("tablet")}
            />
            <DeviceMockup
              type="mobile"
              image={currentProject.mobileImage}
              isActive={activeDevice === "mobile"}
              onClick={() => setActiveDevice("mobile")}
            />
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              {["desktop", "tablet", "mobile"].map((device) => (
                <button
                  key={device}
                  onClick={() =>
                    setActiveDevice(device as "desktop" | "tablet" | "mobile")
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeDevice === device
                      ? "bg-[#00C4B3] text-white shadow-lg"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {device.charAt(0).toUpperCase() + device.slice(1)}
                </button>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Cliquez sur un appareil pour voir l'adaptation responsive
            </p>
          </div>
        </div> */}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">
              Approche Mobile-First & Responsive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00C4B3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#00C4B3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-200 mb-2">
                  Mobile First
                </h4>
                <p className="text-slate-400">
                  Design optimisé en priorité pour mobile puis adapté aux écrans
                  plus larges
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00C4B3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#00C4B3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-200 mb-2">
                  Breakpoints Fluides
                </h4>
                <p className="text-slate-400">
                  Adaptation naturelle à toutes les tailles d'écran avec
                  TailwindCSS
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00C4B3]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-[#00C4B3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-200 mb-2">Performance</h4>
                <p className="text-slate-400">
                  Chargement rapide et interactions fluides sur tous les
                  appareils
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveShowcase;
