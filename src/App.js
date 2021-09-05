import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Hero sliders={SliderData}/>
    </>
  );
}

export default App;
