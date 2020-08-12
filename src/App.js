import React from "react";
import useWindowSize from "./helpers/useWindowSize";

import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Step from "./components/Step";
import FAQ from "./components/FAQ";
import FAQMobile from "./components/FAQ-mobile";
import Contact from "./components/Contact";
import About from "./components/About";
import AboutMobile from "./components/About-mobile";
import Footer from "./components/Footer";
import FooterMobile from "./components/Footer-mobile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [width, height] = useWindowSize();

  return (
    <>
      <Navbar />
      <Step />
      <Container fluid>
        {width <= 1024 && height <= 1024 ? <FAQMobile /> : <FAQ />}
        {width <= 1024 && height <= 1024 && <Contact />}
        {width <= 1024 && height <= 1024 ? <AboutMobile /> : <About />}
      </Container>
      {width <= 1024 && height <= 1024 ? <FooterMobile /> : <Footer />}
    </>
  );
}

export default App;
