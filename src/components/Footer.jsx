import "./footer.css";
import { FaBriefcase, FaCamera } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

function Footer() {
  return (

    <div className="footer">

      {/* Top Links Section */}

      <div className="footer-top">

        <div className="footer-links">
          <span>Privacy policy</span>
          <span>Terms of Service</span>
          <span>Contact Support</span>
        </div>

        <div className="footer-icons">
          <FaBriefcase />
          <FaCamera />
          <MdSupportAgent />
        </div>

      </div>


      {/* Bottom Copyright */}

      <div className="footer-bottom">

        <p>© 2025 Resume AI. All right reserved.</p>

        <span>System operator</span>

      </div>

    </div>

  );
}

export default Footer;