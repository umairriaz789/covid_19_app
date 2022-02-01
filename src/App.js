import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InfoPanel from "./components/InfoPanel";
import Footer from './components/Footer';
function App() {
  const screenconfig=useState(0);
  return (
    <div className="body">
    <Navbar/>
    <h1 className="p2">Coronavirus Disease (COVID-19) Pandemic</h1>
    <h3 className="p3">Goverment of Islamic Republic of Pakistan</h3>
    <InfoPanel currentscreen={screenconfig[0]}/>
    <Footer screenconfig={screenconfig}/>
    </div>
  );
}

export default App;
