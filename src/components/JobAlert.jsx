import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import "./JobAlert.css";
import Sidebar from "./Sidebar";
function JobAlert() {

  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/jobs/")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar/>


      {/* Main Section */}
      <div className="main">

        {/* Navbar */}
        <div className="topbar">

          <input
            className="search"
            placeholder="Search jobs"
          />

          <div className="notification">
            🔔
          </div>

        </div>


        {/* Job Alert Layout */}
        <div className="job-alert">

          {/* Job List */}
          <div className="job-list">

            <h3>Most Recent Jobs</h3>

            {jobs.map((job) => (

              <div
                key={job.id}
                className="job-card"
                onClick={() => setSelectedJob(job)}
              >

                <h4>{job.title}</h4>

                <p>{job.company}</p>

                <span>{job.location}</span>

              </div>

            ))}

          </div>


          {/* Job Details */}
          <div className="job-details">

            {selectedJob ? (

              <>

                <h2>{selectedJob.title}</h2>

                <h4>{selectedJob.company}</h4>

                <p>
                  <b>Location:</b> {selectedJob.location}
                </p>

                <h3>Job Description</h3>

                <p style={{ whiteSpace: "pre-line" }}>
                  {selectedJob.description}
                </p>

                <button className="apply-btn">
                  Apply Now
                </button>

              </>

            ) : (

              <p>Select a job to view details</p>

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default JobAlert;