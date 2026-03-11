import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {

  const userName = localStorage.getItem("userName");

  return (

    <div className="sidebar">

    

      <div className="user">
        <div className="avatar">{userName?.charAt(0)}</div>
        <span>{userName}</span>
      </div>

      <ul className="menu">

        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        
        <li><NavLink to="/templates">Templates</NavLink></li>
        <li><NavLink to="/jobs">Job Alert</NavLink></li>
        <li><NavLink to="/blog">Blogs</NavLink></li>
        <li><NavLink to="/tools">Tools</NavLink></li>
        <li><NavLink to="/feedback">Feedback</NavLink></li>

      </ul>

    </div>

  );
}

export default Sidebar;