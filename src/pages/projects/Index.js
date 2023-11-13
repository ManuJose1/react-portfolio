import projectsJSON from "../../assets/data/projects.json";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
  const [projects, setproject] = useState(projectsJSON);

  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <hr />
      <div className="grid grid-cols-4 gap-5 justify-items-center">{projectList}</div>
    </>
  );
};

export default Index;
