import Navbar from "./Navbar";
import "./pricing.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Pricing() {

  const navigate = useNavigate();

  return (

    <div className="pricing-page">

      <Navbar />

      <div className="pricing-section">

        <h1>Simple Pricing for your Next Career Move</h1>

        <p>
          Generate unlimited resumes and cover letters with our AI.
          Start for free, upgrade when you're ready.
        </p>

        <div className="toggle">
          <span className="active">Monthly</span>
          <span>Yearly</span>
        </div>


        <div className="pricing-cards">

          {/* STARTER */}

          <div className="card">

            <h2>Starter</h2>

            <p className="tag">
              Perfect for trying out our resume builder.
            </p>

            <h3>₹0 <span>/month</span></h3>

            <ul>
              <li className="yes">1 Resume Build</li>
              <li className="yes">Basic AI Suggestions</li>
              <li className="yes">PDF Export (Watermarked)</li>
              <li className="no">Cover Letter Generator</li>
              <li className="no">ATS Optimization Checker</li>
            </ul>

            <button
              className="btn"
              
            >
              Start for Free
            </button>

          </div>


          {/* PRO */}

          <div className="card pro">

            <div className="popular">
              Most Popular
            </div>

            <h2>Pro</h2>

            <p>Everything you need to land the job.</p>

            <h3>₹15 <span>/month</span></h3>

            <ul>
              <li className="yes">Unlimited Resumes</li>
              <li className="yes">Advanced AI Writing Assistant</li>
              <li className="yes">PDF Export</li>
              <li className="yes">Cover Letter Generator</li>
              <li className="yes">ATS Optimization Checker</li>
            </ul>

            <button
              className="btn"
              onClick={() =>
                navigate("/payment", { state: { plan: "Pro", price: 15 } })
              }
            >
              Upgrade to Pro
            </button>

          </div>


          {/* TEAM */}

          <div className="card">

            <h2>Team</h2>

            <p>For agencies and recruitment teams.</p>

            <h3>₹49 <span>/month</span></h3>

            <ul>
              <li className="yes">All Pro Features</li>
              <li className="yes">Team Collaboration Workspace</li>
              <li className="yes">Admin Dashboard</li>
              <li className="yes">Custom Branding</li>
              <li className="yes">Priority Support</li>
            </ul>

            <button
              className="btn"
              onClick={() =>
                navigate("/payment", { state: { plan: "Team", price: 49 } })
              }
            >
              Contact Sales
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>

  );

}

export default Pricing;