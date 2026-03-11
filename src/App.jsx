import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// future pages
 import Login from "./components/Login";
 import Register from "./components/Register";
 import Dashboard from "./components/Dashboard";
 import JobAlert from "./components/JobAlert";
 import Blog from "./components/Blog";
import Feedback from "./components/Feedback";
import Pricing from "./components/Pricing";
 import Payment from "./components/Payment";

import Templates from "./components/Templates";
import Builder from "./components/Builder";
import ResumeChoice from "./components/ResumeChoice";
import UploadResume from "./components/UploadResume";


function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Future Routes */}
       
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/jobs" element={<JobAlert />} />
         <Route path="/blog" element={<Blog />} />
        <Route path="/feedback" element={<Feedback />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/payment" element={<Payment />} />



        <Route path="/templates" element={<Templates />}/>
         <Route path="/builder" element={<Builder />} />
         <Route path="/resumechoice" element={<ResumeChoice />} />
          <Route path="/upload-resume" element={<UploadResume />} />


      

      </Routes>
    </Router>
  );
}

export default App;