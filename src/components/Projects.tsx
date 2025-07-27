import projectsData from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => (
  <section id="projects" className="py-20 md:py-32 bg-[#1A1A1A]/70">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12">
        Mes Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
