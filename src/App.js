import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <Link to={"/vividfront.github.io"} className="navbar-brand">
              Crud
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/vividfront.github.io"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/adduser"} className="nav-link">
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/listuser"} className="nav-link">
                  List User
                </Link>
              </li>
            </div>
        </div>
        
      </nav>
     
      <div className="container mt-3">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/listuser" element={<ListUser />} />
          </Routes>

      </div>
      
    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
