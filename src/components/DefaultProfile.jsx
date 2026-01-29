import { Link } from "react-router";
const DefaultProfile = () => {
    return <p>Oh, nothing to see here!
        <p><Link to="/">
            You can go back to the home page by clicking here!
        </Link></p>
    </p>;
};

export default DefaultProfile;
