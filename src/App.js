import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsIndex from "./pages/projects/Index";
import ProjectsShow from "./pages/projects/Show";
import ProjectsDemo from "./pages/projects/Demo";
import PageNotFound from "./pages/PageNotFound";


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
          <Route path="/projects/:slug" element={<ProjectsShow />} />
          <Route path="/projects/:slug/demo" element={<ProjectsDemo />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
