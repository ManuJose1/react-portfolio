import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsJSON from "../../assets/data/projects.json";

const Show = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // let  temp = projectsJSON.filter((project)=>{
    //     return project.slug === slug
    // });

    setProject(projectsJSON.find((project) => project.slug === slug));
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
        <div className="carousel w-full">
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
      <h1>{slug}</h1>
      <p>{project.title}</p>
      <p>{project.description}</p>
      <p>{project.date}</p>
      <p>{project.tags}</p>
      <p>{project.website}</p>
      <p>{project.github}</p>
      {imageCarousel}
    </>
  );
};

export default Show;
