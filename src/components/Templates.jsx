import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Templates.css";
import Footer from "./Footer";

function Templates() {
   const BASE_URL = "http://127.0.0.1:8000";
  const [templates, setTemplates] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/templates/`)
      .then(res => setTemplates(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUseTemplate = () => {
    const user = localStorage.getItem("userName");
    if (!user) {
      setShowPopup(true);
    } else {
      navigate("/resumechoice");
    }
  };

  const filteredTemplates = templates.filter((t) => {
    const name = t.name.toLowerCase();
    if (filter === "all") return true;
    if (filter === "classic") return name.includes("kim") || name.includes("graphic");
    if (filter === "photo") return name.includes("graphic") || name.includes("kim");
    if (filter === "modern") return name.includes("moon") || name.includes("graphic");
    return true;
  });

  return (
    <div className="templates-page">
      <Navbar />

      <div className="templates-container">
        <h1 className="title">Choose a Resume Template</h1>
        <p className="desc">
          Select one of our expertly designed resume templates to kickstart your job application.
        </p>
        <p className="note">
          You can easily change your template later.
        </p>

        {/* Filters */}
        <div className="template-filters">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All Templates</button>
          <button className={filter === "classic" ? "active" : ""} onClick={() => setFilter("classic")}>Classic Templates</button>
          <button className={filter === "photo" ? "active" : ""} onClick={() => setFilter("photo")}>Photo Templates</button>
          <button className={filter === "modern" ? "active" : ""} onClick={() => setFilter("modern")}>Modern Templates</button>
        </div>

        {/* Template Grid */}
        <div className="template-grid">
          {filteredTemplates.map((t) => (
            <div className="template-card" key={t.id}>
              <img src={`${BASE_URL}${t.image}`} alt={t.name} />
              
              {/* Overlay on hover */}
              <div className="template-overlay" onClick={handleUseTemplate}>
                <button className="use-btn">Use This Template</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Please Login</h2>
            <p>Please login to use these templates</p>
            <div className="popup-buttons">
              <button className="logins-btn" onClick={() => navigate("/login")}>Login</button>
              <button className="close-btn" onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Templates;