import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadResume.css";
// replace with your logo path

export default function UploadResume() {
   const BASE_URL = "https://ai-resume-website-backend.onrender.com";
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
const [logo, setLogo] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch(`${BASE_URL}/api/upload-resume/`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        alert("Upload failed");
        return;
      }

      const data = await res.json();
      navigate("/builder", { state: { prefillData: data } });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check console.");
    }
  };
fetch("http://127.0.0.1:8000/api/logo/")
      .then(res => res.json())
      .then(data => {
        setLogo(data.image);
      });
  return (
    <>
      {/* Navbar with logo */}
      <div className="navbar">
        <div className="logo">
        {logo && (
          <img
            src={`http://127.0.0.1:8000${logo}`}
            alt="logo"
          />
        )}
      </div>
      </div>

      {/* Upload section */}
      <div className="upload-page">
        <div className="upload-box">
          <h1>Upload Your Resume</h1>
          <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
          <button onClick={handleUpload}>Upload & Continue</button>
        </div>
      </div>
    </>
  );
}
