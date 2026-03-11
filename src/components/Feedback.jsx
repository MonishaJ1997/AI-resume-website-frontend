import Sidebar from "./Sidebar";
import "./feedback.css";

function Feedback() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main feedback-page">

        <h2 className="feedback-title">
          Thank you for your Feedback
        </h2>

        <p className="feedback-desc">
          Should you have face any issue or have any suggestions for us, feel free to contact us.
        </p>

        <div className="feedback-box">

          <h3>Positive feedback</h3>

          <label>Subject</label>
          <input type="text" placeholder="Subject" className="input" />

          <label>Message</label>

          <div className="editor">

            <div className="toolbar">
              <button>B</button>
              <button>U</button>
              <button>I</button>
              <button>•</button>
              <button>≡</button>
            </div>

            <textarea placeholder="Compose message"></textarea>

          </div>

          <div className="btn-row">
            <button className="send-btn">
              Send Message
            </button>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Feedback;