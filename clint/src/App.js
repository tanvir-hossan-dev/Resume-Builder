import Navbar from "./components/navbar/Navbar";
import ResumeForm from "./components/resumeForm/ResumeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowResume from "./components/ShowResume/ShowResume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ResumeForm />} />
        <Route path="/showresume" element={<ShowResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
