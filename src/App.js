import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="content--container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;