import { useParams } from "react-router";
import DefaultProfile from "./components/DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { Link } from "react-router";

const Profile = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}
            <p><Link to="/">
                You can go back to the home page by clicking here!
            </Link></p>
        </div>
    );
};

export default Profile;
