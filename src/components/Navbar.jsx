import "./home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar(){
 const BASE_URL = "http://127.0.0.1:8000";
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [logo, setLogo] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const name = localStorage.getItem("userName");
    if(name){
      setUserName(name);
    }

    fetch(`${BASE_URL}/api/logo/`)
      .then(res => res.json())
      .then(data => {
        setLogo(data.image);
      });

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setUserName("");
    navigate("/");
  };

  return(

    <div className="navbar">

      <div className="logo">
        {logo && (
          <img
            src={`${BASE_URL}${logo}`}
            alt="logo"
          />
        )}
      </div>

      {/* HAMBURGER ICON */}
      <div
        className="hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </div>

      <div className={`nav-links ${mobileMenu ? "show" : ""}`}>

        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/blog" className="nav-item">
          Blogs
        </NavLink>

        <NavLink to="/templates" className="nav-item">
          Templates
        </NavLink>

        <NavLink to="/pricing" className="nav-item">
          Pricing
        </NavLink>

      </div>

      <div className={`auth ${mobileMenu ? "show" : ""}`}>

        {!userName ? (
          <>
            <button className="login" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="start" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </>
        ) : (
          <div className="user-menu">

            <span
              className="username"
              onClick={() => setOpenMenu(!openMenu)}
            >
              👤 {userName} ▼
            </span>

            {openMenu && (
              <div className="dropdown">

                <div
                  className="dropdown-item"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </div>

                <div
                  className="dropdown-item"
                  onClick={() => navigate("/resumechoice")}
                >
                  My Resume
                </div>

                <div
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  Logout
                </div>

              </div>
            )}

          </div>
        )}

      </div>

    </div>

  );
}

export default Navbar;