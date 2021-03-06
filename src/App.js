import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import { useState } from 'react'
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import Listings from "./components/Listings";
import Features from "./components/Features";
import Footer from "./components/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Listings />
      <Features />
      <InfoSection {...InfoDataTwo}/>
      <Footer />
    </>
  );
}

export default App;
