import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import projectsJSON from "../../assets/data/projects.json";
import axios from 'axios';

const Demo = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const App = lazy(() => import(`./demos/${slug}/App`));

  useEffect(() => {

    axios.get('https://manu-portfolio-fd228-default-rtdb.europe-west1.firebasedatabase.app/.json')
         .then((response)=>{
            let proj = response.data.find((project) => project.slug === slug);
            console.log(proj);
        
            if (!proj) {
              navigate("/projects");
            } else if (!proj.demo) {
              navigate(`/projects/${slug}`);
            }
        
            setProject(proj);
         })
         .catch((err)=>{
          console.log(err);
         })


  }, []);

  if (!project) return <h1>Project not found </h1>;

  return (
    <Suspense fallback={<p>Loading...</p>}>
        <App/>
    </Suspense>
  );
};

export default Demo;
