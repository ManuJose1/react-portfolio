import { useNavigate } from "react-router-dom";

const NavExample = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        console.log('clicked');
        navigate('/');
    };

    return(<>
    <h1>this is  NavExample</h1>
    <button onClick={handleClick}>Click to go home</button>
    </>)
};

export default NavExample