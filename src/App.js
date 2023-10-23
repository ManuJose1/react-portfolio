import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Import Components
import Navbar from './components/Navbar';

//Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavExample from './pages/NavExample';
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/nav' element={<NavExample/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;