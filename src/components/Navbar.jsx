import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar__nav navbar-expand-lg navbar-dark ">
      <NavLink className="navbar-brand" style={{ marginLeft: `15px` }} to="/">
        ASK
      </NavLink>

      <div className="collapse navbar-collapse navbar-nav">
        <NavLink className="nav-item nav-link" to="/education">
          Education
        </NavLink>
        <NavLink className="nav-item nav-link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-item nav-link" to="/internships">
          Internships
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
