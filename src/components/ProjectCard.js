import {Link} from 'react-router-dom';

const ProjectCard = ({project}) => {

    const tags = project.tags.map((tag,i)=>{
        return <div className="badge badge-outline badge-accent" key={i}>{tag}</div>
    });

    return(
        <>
            <p>{project.title}-{project.date}</p>
            {tags}
            
            {(project.website)?(<a href={project.website} target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Website</a>):('')}
            {(project.github)?(<a href={project.github}  target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Github</a>):('')}
            <Link className='btn btn-wide glass btn-sm btn-primary' to={`/projects/${project.slug}`}> Show</Link>

        </>
    )
};

export default ProjectCard;