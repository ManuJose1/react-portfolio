import {useParams} from 'react-router-dom';

const Show = () => {
    const {slug} = useParams();
    
    return(
        <>
            <h1>{slug}</h1>
        </>
    )
};

export default Show;