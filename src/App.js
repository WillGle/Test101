// Import library from react
import { Routes, Route } from "react-router-dom";

// Component import
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
