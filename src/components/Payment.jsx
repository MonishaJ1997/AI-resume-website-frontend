
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./payment.css";

function Payment() {

const location = useLocation();
const navigate = useNavigate();

const plan = location.state?.plan || "Pro";
const price = location.state?.price || 0;

const [name,setName] = useState("");
const [card,setCard] = useState("");
const [expiry,setExpiry] = useState("");
const [cvc,setCvc] = useState("");
const [address,setAddress] = useState("");

const [message,setMessage] = useState("");

/* Auto redirect after success */

useEffect(()=>{

if(message === "success"){

const timer = setTimeout(()=>{

navigate("/");

},3000); // 30 seconds

return ()=> clearTimeout(timer);

}

},[message,navigate]);

/* Payment handler */

const handlePayment = (e) => {

e.preventDefault();

if(!name || !card || !expiry || !cvc ){
setMessage("⚠️ Please fill all fields");
return;
}

if(card.length < 16){
setMessage("⚠️ Card number must be 16 digits");
return;
}

if(cvc.length < 3){
setMessage("⚠️ CVC must be 3 digits");
return;
}

/* Success */

setMessage("success");

};

return (

<div>
<div className="paymentsed">
<Navbar />

<div className="payment-container">

{/* Order Summary */}

<div className="plan-summary">

<h2>Order Summary</h2>

<div className="plan-card">
<h3>{plan} Plan</h3>
<p>AI Resume Builder Subscription</p>

<div className="price">
₹{price} <span>/month</span>
</div>
</div>

<div className="total">
<span>Total</span>
<span>₹{price}</span>
</div>

</div>


{/* Payment Form */}

<form className="payment-form" onSubmit={handlePayment}>

<h2>Payment Details</h2>

<input
type="text"
placeholder="Cardholder Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Card Number"
value={card}
onChange={(e)=>setCard(e.target.value)}
/>

<div className="row">

<input
type="text"
placeholder="MM/YY"
value={expiry}
onChange={(e)=>setExpiry(e.target.value)}
/>

<input
type="text"
placeholder="CVC"
value={cvc}
onChange={(e)=>setCvc(e.target.value)}
/>

</div>

<button className="pay-btn">
Pay ₹{price}
</button>

{/* Error Message */}

{message && message !== "success" && (
<p className="payment-message">{message}</p>
)}

</form>

</div>
</div>

{/* SUCCESS POPUP */}

{message === "success" && (

<div className="payment-popup">

<div className="popup-box">

<h2>✅ Payment Successful</h2>

<p>Your subscription has been activated.</p>

<button
className="popup-btn"
onClick={()=>setMessage("")}
>
Close
</button>

</div>

</div>

)}

</div>

);

}

export default Payment;

