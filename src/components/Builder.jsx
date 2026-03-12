// Builder.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./builder.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
const Builder = () => {
  const location = useLocation();
  const [logo, setLogo] = useState("");
   const BASE_URL = "https://ai-resume-website-backend.onrender.com";
  const prefillData = location.state?.prefillData || {};

  const [step, setStep] = useState(1);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: prefillData.firstName || "",
    surname: prefillData.surname || "",
    profession: prefillData.profession || "",
    city: prefillData.city || "",
    country: prefillData.country || "",
    phone: prefillData.phone || "",
    email: prefillData.email || "",
    employer: prefillData.employer || "",
    jobTitle: prefillData.jobTitle || "",
    startMonth: prefillData.startMonth || "",
    startYear: prefillData.startYear || "",
    endMonth: prefillData.endMonth || "",
    endYear: prefillData.endYear || "",
    experienceDesc: prefillData.experienceDesc || "",
    school: prefillData.school || "",
    university: prefillData.university || "",
    degree: prefillData.degree || "",
    month: prefillData.month || "",
    year: prefillData.year || "",
    skill1: prefillData.skill1 || "",
    skill2: prefillData.skill2 || "",
    skill3: prefillData.skill3 || "",
    skill4: prefillData.skill4 || "",
    summary: prefillData.summary || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

 const generatePDF = () => {
    const element = document.getElementById("resume");
    if (!element) return alert("Resume not found!");
     element.style.width = "794px";

    const opt = {
      margin: 0.3,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      // revert back to preview width
      element.style.width = "320px";
    });
};
  

  useEffect(() => {
    fetch(`${BASE_URL}/api/logo/`)
      .then((res) => res.json())
      .then((data) => {
        setLogo(data.image);
      });
  }, []);

  return (
    <>
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

      <div className="builder-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="steps">
            {["Heading", "Experience", "Education", "Skills", "Summary", "Finalize"].map(
              (label, index) => (
                <div key={index} className={`step ${step === index + 1 ? "active" : ""}`}>
                  <span>{index + 1}</span> {label}
                </div>
              )
            )}
          </div>
        </div>

        {/* Content */}
        <div className="builder-content">

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h3>Contact Information</h3>
              <div className="form-grid">
                <input name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName}/>
                <input name="surname" placeholder="Surname" onChange={handleChange} value={formData.surname}/>
                <input name="profession" className="full" placeholder="Profession" onChange={handleChange} value={formData.profession}/>
                <input name="city" placeholder="City" onChange={handleChange} value={formData.city}/>
                <input name="country" placeholder="Country" onChange={handleChange} value={formData.country}/>
                <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone}/>
                <input name="email" placeholder="Email" onChange={handleChange} value={formData.email}/>
              </div>
              <div className="builder-buttons">
                <button
  className="back-btn"
  onClick={() => navigate("/resumechoice")}
>
  Back
</button>
                <button onClick={nextStep} className="next-btn">Next</button>
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h3>Experience</h3>
              <div className="form-grid">
                <input name="employer" placeholder="Employer" onChange={handleChange} value={formData.employer}/>
                <input name="jobTitle" placeholder="Job Title" onChange={handleChange} value={formData.jobTitle}/>
                <input name="startMonth" placeholder="Start Month" onChange={handleChange} value={formData.startMonth}/>
                <input name="startYear" placeholder="Start Year" onChange={handleChange} value={formData.startYear}/>
                <input name="endMonth" placeholder="End Month" onChange={handleChange} value={formData.endMonth}/>
                <input name="endYear" placeholder="End Year" onChange={handleChange} value={formData.endYear}/>
              </div>

              <textarea
                name="experienceDesc"
                className="experience-text"
                placeholder="Job Responsibilities"
                onChange={handleChange}
                value={formData.experienceDesc}
              />

              <div className="builder-buttons">
                <button onClick={prevStep} className="back-btn">Back</button>
                <button onClick={nextStep} className="next-btn">Next</button>
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h3>Education</h3>
              <div className="form-grid">
                <input name="school" placeholder="School" onChange={handleChange} value={formData.school}/>
                <input name="university" placeholder="University" onChange={handleChange} value={formData.university}/>
                <input name="degree" placeholder="Degree" onChange={handleChange} value={formData.degree}/>
                <input name="month" placeholder="Month" onChange={handleChange} value={formData.month}/>
                <input name="year" placeholder="Year" onChange={handleChange} value={formData.year}/>
              </div>

              <div className="builder-buttons">
                <button onClick={prevStep} className="back-btn">Back</button>
                <button onClick={nextStep} className="next-btn">Next</button>
              </div>
            </>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <>
              <h3>Skills</h3>
              <div className="form-grid">
                <input name="skill1" placeholder="Skill 1" onChange={handleChange} value={formData.skill1}/>
                <input name="skill2" placeholder="Skill 2" onChange={handleChange} value={formData.skill2}/>
                <input name="skill3" placeholder="Skill 3" onChange={handleChange} value={formData.skill3}/>
                <input name="skill4" placeholder="Skill 4" onChange={handleChange} value={formData.skill4}/>
              </div>

              <div className="builder-buttons">
                <button onClick={prevStep} className="back-btn">Back</button>
                <button onClick={nextStep} className="next-btn">Next</button>
              </div>
            </>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <>
              <h3>Summary</h3>

              <textarea
                name="summary"
                className="experience-text"
                placeholder="Write about yourself..."
                onChange={handleChange}
                value={formData.summary}
              />

              <div className="builder-buttons">
                <button onClick={prevStep} className="back-btn">Back</button>
                <button onClick={() => setStep(6)} className="next-btn">Next</button>
              </div>
            </>
          )}

          {/* Step 6 */}
          {step === 6 && (
            <>
              <h3>Finalize & Generate Resume</h3>
              <div className="builder-buttons">
                              <button
  className="back-btn"
  onClick={() => navigate("/")}
>
  Back to Home
</button>
              <button className="next-btn" onClick={generatePDF}>Generate PDF</button>
            </div>
            </>
          )}

        </div>

        {/* Resume Preview */}
        <div id="resume">
          <h1>{formData.firstName} {formData.surname}</h1>
          <p>{formData.profession}</p>
          <p>{formData.email} | {formData.phone}</p>
          <hr className="thin-line"/>

          <h2>Experience</h2>
          <h3>{formData.jobTitle} - {formData.employer}</h3>
          <p>{formData.startMonth} {formData.startYear} - {formData.endMonth} {formData.endYear}</p>
          <p>{formData.experienceDesc}</p>
          <hr className="thin-line"/>

          <h2>Education</h2>
          <p>{formData.degree} - {formData.university}</p>
          <p>{formData.month} {formData.year}</p>
          <hr className="thin-line"/>

          <h2>Skills</h2>
          <ul>
            <li>{formData.skill1}</li>
            <li>{formData.skill2}</li>
            <li>{formData.skill3}</li>
            <li>{formData.skill4}</li>
          </ul>
          <hr className="thin-line"/>

          <h2>Summary</h2>
          <p>{formData.summary}</p>
        </div>

      </div>
      <Footer/>
    </>
    
  );
};

export default Builder;
