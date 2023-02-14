import logo from './logo.svg';
import './App.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Presentation from './Components/Presentation';
import Portfolio from './Components/Portfolio';
import Competence from './Components/Competence';
import Experience from './Components/Experience';
import Projet from './Components/Projet';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
       <Banner />
      <Presentation />
      <Portfolio />
       <Competence />
      <Experience />
      <Projet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
