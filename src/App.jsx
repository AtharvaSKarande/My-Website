import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Error from "./components/Error";
import Home from "./components/Home";
import Internships from "./components/Internships";
import Projects from "./components/Projects";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
