import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import Navbar from "./components/Navbar";

//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsIndex from "./pages/projects/Index"
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsIndex />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
