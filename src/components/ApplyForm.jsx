import { useState } from "react";
import axios from "axios";


 const BASE_URL = "http://127.0.0.1:8000";
function ApplyForm({ job, close }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null
  });

  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("job", job.id);
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("message", form.message);
    data.append("resume", form.resume);

    await axios.post(`${BASE_URL}/apply/`, data);

    alert("Application submitted successfully");

    close();
  };

  return (

    <div className="apply-popup">

      <form onSubmit={handleSubmit}>

        <h3>Apply for {job.title}</h3>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input
          type="file"
          name="resume"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>

        <button type="button" onClick={close}>Cancel</button>

      </form>

    </div>

  );
}

export default ApplyForm;