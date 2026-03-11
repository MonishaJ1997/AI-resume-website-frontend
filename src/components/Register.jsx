
 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Register() {
 const BASE_URL = "http://127.0.0.1:8000";
  const navigate = useNavigate();

  const [logo, setLogo] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  /* Fetch Logo */

  useEffect(() => {
    fetch(`${BASE_URL}/api/logo/`)
      .then(res => res.json())
      .then(data => {
        setLogo(data.image);
      });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      const user = {
        name: form.name,
        email: form.email,
        password: form.password
      };

      localStorage.setItem("registeredUser", JSON.stringify(user));

      alert("Registration Successful");

      navigate("/login");
    }
  };

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

      <div className="auth-container">

        <div className="auth-box">

          <h2>Create Account</h2>

          <p>Register to start building your resume.</p>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

            <button className="login-btn">Register</button>

          </form>

          <p className="signup-text">
            Already have an account?
            <span onClick={() => navigate("/login")}> Login</span>
          </p>

        </div>

      </div>

    </>
  );
}

export default Register;

