import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Speciality from './components/Speciality';
import Advertisement from './components/Advertisement';
import Feedback from './components/Feedback';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import cup1 from './assets/pngwing 1 (1).png';
import cup2 from './assets/pngwing 2.png';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Menu/>
      <Speciality/>
      <Advertisement/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
