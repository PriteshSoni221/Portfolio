import React, { useState } from "react";
import Theme from "./styles/Theme";
import Navbar from "./components/Navbar/Navbar";
// import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import TimeLine from "./components/TimeLine/TimeLine";
import Footer from "./components/Footer/Footer";
import { Section } from "./styles/GlobalComponents";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Theme>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Section grid>
          <Hero />/{/* <BgAnimation /> */}
        </Section>
        <Projects />
        <Technologies />
        <TimeLine />
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
