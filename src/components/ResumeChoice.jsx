import { useNavigate } from "react-router-dom";
import "./resume.css";
import { useState, useEffect } from "react";
import Footer from "../components/Footer"
function ResumeChoice() {
 const BASE_URL = "https://ai-resume-website-backend.onrender.com";
  const navigate = useNavigate();

  const [logo, setLogo] = useState("");
  const [icons, setIcons] = useState([]);

  const handleUploadClick = () => {
    navigate("/upload-resume");
  };

  const handleScratchClick = () => {
    navigate("/builder");
  };

  useEffect(() => {

    // Logo
    fetch(`${BASE_URL}/api/logo/`)
      .then(res => res.json())
      .then(data => {
        setLogo(data.image);
      });

    // Icons
    fetch(`${BASE_URL}/api/feature-icons/`)
      .then(res => res.json())
      .then(data => {
        setIcons(data);
      });

  }, []);

  return (

    <div>

      {/* Navbar */}
      <div className="navbar">

        <div className="logo">
          {logo && (
            <img
              src={`${BASE_URL}${logo}`}
              alt="logo"
            />
          )}
        </div>

      </div>

      {/* Page */}
      <div className="choice-page">

        <h1 className="choice-title">
          How will you make your resume?
        </h1>

        <div className="choice-container">

          {/* Upload Resume */}

          <div className="choice-card" onClick={handleUploadClick}>

            {icons[0] && (
              <img
                src={`${BASE_URL}${icons[0].icon}`}
                alt="upload"
                className="choice-image"
              />
            )}

            <h3>I already have a resume</h3>

            <p>
              Upload your existing resume to make quick edits
            </p>

          </div>

          {/* Start From Scratch */}

          <div className="choice-card" onClick={handleScratchClick}>

            {icons[1] && (
              <img
                src={`http://127.0.0.1:8000${icons[1].icon}`}
                alt="scratch"
                className="choice-image"
              />
            )}

            <h3>Start from scratch</h3>

            <p>
              Our AI will guide you through creating a resume
            </p>

          </div>

        </div>

      </div>
<Footer/>
    </div>
  

  );
}

export default ResumeChoice;
