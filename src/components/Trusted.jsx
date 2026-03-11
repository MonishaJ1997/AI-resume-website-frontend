import "./home.css";
import { FaRocket, FaNetworkWired } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GiPineTree } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

function Trusted() {
  return (
    <div className="trusted">

      <h3>TRUSTED BY PROFESSIONALS HIRED AT</h3>

      <div className="companies">

        <div className="company">
          <BsGridFill className="icon"/>
          <span>DataCo</span>
        </div>

        <div className="company">
          <FaRocket className="icon"/>
          <span>Launch Pad</span>
        </div>

        <div className="company">
          <GiPineTree className="icon"/>
          <span>Green Tech</span>
        </div>

        <div className="company">
          <MdPayment className="icon"/>
          <span>Fin Corp</span>
        </div>

        <div className="company">
          <FaNetworkWired className="icon"/>
          <span>Networks</span>
        </div>

      </div>

    </div>
  );
}

export default Trusted;