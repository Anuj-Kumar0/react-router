import App from "../App";
import Profile from "../Profile";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Dashboard";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name?",
        element: <Profile />,
    },
    {
        path: "dashboard/:score?",
        element: <Dashboard />
    },
];

export default routes;
