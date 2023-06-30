import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MentorLogin from "./pages/MentorLogin";
import MenteeLogin from "./pages/MenteeLogin";
import MenteeSignup from "./pages/MenteeSignup";
import MentorSignup from "./pages/MentorSignup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loginMentor" element={<MentorLogin />} />
      <Route path="/loginMentee" element={<MenteeLogin />} />
      <Route path="/mentorSignup" element={<MentorSignup />} />
      <Route path="/menteeSignup" element={<MenteeSignup />} />
    </Routes>
  );
}

export default App;
