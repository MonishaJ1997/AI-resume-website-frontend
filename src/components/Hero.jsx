import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Hero() {
 const BASE_URL = "https://ai-resume-website-backend.onrender.com";
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/landing-images/`)
      .then(res => {
        if(res.data.length > 0){
          setImage(res.data[0].image)
        }
      })
  }, [])

  return (
    <div className="hero">

      <div className="hero-left">

        <div className="badge">
          AI-Powered Resume Builder V2.0
        </div>

        <h1>
          Create your <br />
          Resume in Minutes <br />
          Using AI
        </h1>

        <p>
          Stop struggling with formatting. Our AI-powered
          builder writes, formats and optimizes your resume
          to help you land your dream job 2x faster.
        </p>

        <div className="hero-buttons">

          <button 
            className="generate"
            onClick={() => navigate("/templates")}
          >
            Generate Resume
          </button>

        </div>

        <div className="features">
          <span><span className="tick">✔</span> ATS-Friendly</span>
          <span><span className="tick">✔</span> Professional Templates</span>
        </div>

      </div>

      <div className="hero-right">
        {image && <img src={image} alt="resume" />}
      </div>

    </div>
  );
}

export default Hero;
