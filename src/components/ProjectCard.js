import {Link} from 'react-router-dom';

const ProjectCard = ({project}) => {

    const tags = project.tags.map((tag,i)=>{
        return <div className="badge badge-outline badge-accent" key={i}>{tag}</div>
    });

    return(
        <>
        <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://picsum.photos/400" alt="Movie"/></figure>
                <div className="card-body">
                <h2 className="card-title">{project.title}-{project.date}</h2>
                <p>{project.description}</p>
                    <div className="card-actions justify-centre">
                        {tags}
                        {(project.website)?(<a href={project.website} target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Website</a>):('')}
                        {(project.github)?(<a href={project.github}  target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Github</a>):('')}
                        <Link className='btn btn-wide glass btn-sm btn-primary' to={`/projects/${project.slug}`}>Show</Link>
                    </div>
                </div>
        </div>
            
            

        </>
    )
};

export default ProjectCard;