import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mision from "./components/Mision/Mision";
import Servicios from "./components/Servicios/Servicios";


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Hero/>
      </header>

      <About/>
      <Mision/>
      <Servicios/>


      <Footer/>
    </div>
  );
}

export default App;
