import {Link} from 'react-router-dom';
import image from '../assets/images/to_do_1.png'

const ProjectCard = ({project}) => {

    const tags = project.tags.map((tag,i)=>{
        return <div className="badge badge-outline badge-accent" key={i}>{tag}</div>
    });

    let description = project.description.substring(0, 70);

    return(
        <>
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img style={{width:550, height:250}} alt={project.images[0].caption} src={project.images[0].path}/></figure>
                <div className="card-body">
                <h2 className="card-title">{project.title}-{project.date}</h2>
                <div>{tags}</div>
                <p>{description}...</p>
                    <div className="card-actions justify-centre">
                    {(project.website)?(<a href={project.website} target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Website</a>):('')}
                    </div>
                    <div className="card-actions justify-centre">
                    {(project.github)?(<a href={project.github}  target='_blank' rel='noreferrer' className="btn btn-wide glass btn-sm btn-primary">Github</a>):('')}
                    </div>
                    <div className="card-actions justify-centre">
                    <Link className='btn btn-wide glass btn-sm btn-primary' to={`/projects/${project.slug}`}>Show</Link>
                </div>
                </div>
        </div>
            
            

        </>
    )
};

export default ProjectCard;