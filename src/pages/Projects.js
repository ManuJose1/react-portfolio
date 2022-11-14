import projects from "../assets/data/projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  console.log(projects);

  return (
    <>
      <ProjectCard title={projects[0].title} />
      <ProjectCard title={projects[1].title} />
    </>
  );
};

export default Projects;
