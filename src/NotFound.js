import { Link } from "react-router-dom";
const NotFound = () => {
    return ( <div className="not-found">
        <h2>oops! </h2>
        <p>that page can not found</p>
        <Link to="/">Back to homepage...</Link>
    </div> );
}
 
export default NotFound;