import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/react";

function App(){

  return (

    <div className="
        bg-black
        text-white
    ">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />  

      <Analytics />

    </div>

  )

}


export default App;