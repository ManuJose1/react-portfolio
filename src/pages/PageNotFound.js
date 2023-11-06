import { useLocation } from "react-router-dom";

const PageNotFound = () => {

    let location = useLocation();

    return(
        <div>
            <h1 className="text-3xl font-bold underline text-center">Sorry 404, the  page {location.pathname} was not found</h1>
        </div>
    );
};

export default PageNotFound;