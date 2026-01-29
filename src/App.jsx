import './App.css'
import { Link } from "react-router";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
            <p><Link to="dashboard">Dashboard</Link></p>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default App;
