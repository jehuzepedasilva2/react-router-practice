import './App.css'
// so it it doesn't reload a page and uses react router
import { Link } from "react-router-dom";


// to use router, run 'npm install react-router-dom'
// modify main..

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
