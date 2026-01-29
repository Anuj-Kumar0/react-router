import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";
import GoodScore from "./Goodscore";
import BadScore from "./Badscore";
import { Link } from "react-router";

const Dashboard = () => {
    const { score } = useParams();

    return (
        <div>
            <h1>Hello from dashboard page!</h1>
            <p>So, what is your score?</p>
            <hr />
            <h2>The score is here:</h2>
            <Link to="/dashboard/goodscore">Goodscore</Link>
            <p><Link to="/dashboard/badscore">Badscore</Link></p>
            {score === "goodscore" ? (
                <GoodScore />
            ) : score === "badscore" ? (
                <BadScore />
            ) : (
                <DefaultProfile />
            )}
            <p><Link to="/">
                You can go back to the home page by clicking here!
            </Link></p>
        </div>
    );
};

export default Dashboard;
