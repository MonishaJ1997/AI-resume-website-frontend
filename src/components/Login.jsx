
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Login() {
 const BASE_URL = "http://127.0.0.1:8000";
  const navigate = useNavigate();

  const [logo, setLogo] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: ""
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

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (!storedUser) {
        alert("User not registered. Please register first.");
        navigate("/register");
        return;
      }

      if (
        storedUser.email === form.email &&
        storedUser.password === form.password
      ) {

        localStorage.setItem("userName", storedUser.name);

        alert("Login Successful");

        navigate("/templates");

      } else {

        alert("Invalid email or password");

      }
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

          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your workspace.</p>

          <form onSubmit={handleSubmit}>

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

            <button className="login-btn">Login</button>

          </form>

          <p className="signup-text">
            Don't have an account?
            <span onClick={() => navigate("/register")}> Sign up</span>
          </p>

        </div>

      </div>

    </>
  );
}

export default Login;

