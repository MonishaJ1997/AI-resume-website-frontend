import { useEffect, useState } from "react";
import "./dashboard.css";
import "./Blog.css";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blog() {
 const BASE_URL = "https://ai-resume-website-backend.onrender.com";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    fetch(`${BASE_URL}/api/blogs/`)
      .then(res => res.json())
      .then(data => setBlogs(data));

  }, []);

  return (
  


    <div className="blog-page">

     
    <Navbar />

      {/* MAIN BLOG CONTENT */}
      <div className="main">

        <div className="blog-grid">

          {blogs.map((blog) => (

            <div key={blog.id} className="blog-card">

              <img
                src={`${BASE_URL}${blog.image}`}
                alt={blog.title}
              />

              <p className="meta">
                By {blog.author} | {blog.date}
              </p>

              <h4>{blog.title}</h4>

              <p>{blog.desc}</p>

              <a href="#">Read more</a>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>

  );
}

export default Blog;
