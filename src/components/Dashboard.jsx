
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./dashboard.css";
import { useState } from "react";
import Footer from "../components/Footer"
function Dashboard() {

  const navigate = useNavigate();
 const BASE_URL = "http://127.0.0.1:8000";
  const [showChatbot, setShowChatbot] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };

    setMessages(prev => [...prev, userMsg]);

    try {

      const res = await fetch(`${BASE_URL}/api/ai-chat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await res.json();

      const aiMsg = { sender: "ai", text: data.reply };

      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      console.error("Error:", error);
    }

    setMessage("");
  };

  return (

    <>
      <Navbar />

      <div className="dashboard-container">

        <h3>Welcome to your dashboard</h3>

        {/* Top Cards */}
        <div className="top-cards">

          <div
            className="cardsed"
            onClick={() => navigate("/resumechoice")}
          >
            <span>＋</span>
            <p>New Resume</p>
          </div>

          <div className="cardsed">
            <span>＋</span>
            <p>New Letter</p>
          </div>

          <div
            className="cardsed"
            onClick={() => navigate("/resumechoice")}
          >
            <p>My Resume</p>
          </div>

          <div
            className="cardsed"
            onClick={() => navigate("/templates")}
          >
            <p>Templates</p>
          </div>

        </div>

        {/* AI Assistance */}
        <div className="ai-box">

          <div className="ai-header">
            <h3>AI Assistance</h3>

            <button
              className="ai-btn"
              onClick={() => setShowChatbot(true)}
            >
              AI Assistance
            </button>
          </div>

          <p>
            Ask AI Assistance Question About Career, Jobs,
            Business and Finance
          </p>

        </div>

        {/* Ask Question */}
        <div className="question-box">

          <p>What is your question or post?</p>

          <textarea></textarea>

          <div className="question-actions">

            <button className="photo-btn">
              📷 Photo
            </button>

            <button className="ask-btn">
              Ask Question
            </button>

          </div>

        </div>

        {/* Resume Section */}
        <div className="resume-section">

          <div className="resume-header">

            <div>
              <h4>Create Your Resume in 5 min</h4>
              <p>
                Choose between simple, basic, professional
                or Creative Free Resume Templates
              </p>
            </div>

            <span className="arrow">➜</span>

          </div>

          <div className="resume-cards">

            <div className="pro-tip">

              <p>
                PRO TIPS: it's important to create a custom
                resume tailored to each job application
                to increase your chances of success!
              </p>

              <button>
                Resume Editing Services
              </button>

            </div>

            <div
              className="new-resume"
              onClick={() => navigate("/resumechoice")}
            >
              <span className="plus">＋</span>
              <p>Create New Resume</p>
            </div>

          </div>

        </div>

      </div>

<Footer/>
      {/* CHATBOT POPUP */}

      {showChatbot && (

        <div className="chatbot-overlay">

          <div className="chatbot-box">

            <div className="chatbot-header">

              <h3>AI Career Assistant</h3>

              <button
                className="close-chat"
                onClick={() => setShowChatbot(false)}
              >
                ✕
              </button>

            </div>

            <div className="chatbot-body">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "user" ? "user-msg" : "ai-msg"}
                >
                  {msg.text}
                </div>
              ))}

            </div>

            <div className="chat-input">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask AI about resume or career..."
              />

              <button
                className="send-btn"
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Dashboard;