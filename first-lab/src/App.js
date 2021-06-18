import logo from './logo.svg';
import './App.css';
import ImageHeader from './Header/header';
import About  from './About/About';
import Skills  from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
        <ImageHeader/>
        <About />
        <Skills />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
