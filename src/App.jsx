import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/footer';
import Menu from './components/menu';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content"> {/* Wrapper untuk konten utama */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Footer tetap berada di luar main-content */}
    </Router>
  );
}
  


export default App;
