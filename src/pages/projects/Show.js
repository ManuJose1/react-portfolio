import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const Show = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {

    axios.get('https://manu-portfolio-fd228-default-rtdb.europe-west1.firebasedatabase.app/.json')
         .then((response)=>{
          setProject(response.data.find((project) => project.slug === slug));
         })
         .catch((err)=>{
          console.log(err);
         })
 
  }, []);

  if (!project) {
    return <h1>Project does not exist</h1>;
  }

  let imageCarousel = "";

  if (project.images) {

    let items = project.images.map((image,i)=>{
        return (
            <div id={`item${i}`} className="carousel-item w-full">
            <img title={image.caption} src={`${image.path}`} className="w-full"/>
            </div>
        )
    });

    let buttons = project.images.map((button,i)=>{
        return (
            <a href={`#item${i}`} className="btn btn-xs">{i+1}</a>
        )
    });

    imageCarousel = (
      <>
        <div className="carousel">
            {items}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            {buttons}
        </div>
      </>
    );
  }

  return (
    <>
      <p><b>Title: </b>{project.title}</p>
      {imageCarousel}
      <p><b>Description: </b>{project.description}</p>
      <p><b>Date: </b>{project.date}</p>
      <p><b>Tags: </b>{project.tags}</p>
      <p><b>Website: </b><a href={project.website}>{project.website}</a></p>
      <p><b>Github: </b><a href={project.github}>{project.github}</a></p>

    </>
  );
};

export default Show;
