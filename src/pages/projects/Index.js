import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import axios from 'axios';

const Index = () => {
  const [projects, setProjects] = useState(null);

  useEffect(()=>{
    axios.get('https://manu-portfolio-fd228-default-rtdb.europe-west1.firebasedatabase.app/.json')
         .then((response)=>{
          setProjects(response.data)
         })
         .catch((err)=>{
          console.log(err);
         })
  },[]);

  if(!projects) return (<p>Loading...</p>)
  
  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <br/>
      <div className="mt-5 grid grid-flow-cols auto-cols-max gap-5 justify-center">{projectList}</div>
    </>
  );
};

export default Index;
