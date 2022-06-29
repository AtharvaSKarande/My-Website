import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Projects from "./pages/Projects";

import background from "/background.png";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.background = background;
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
