import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
//function that renders Header and Home compnent to the App
function App() {
  return (
  <div>
    <Header />
    <Home/>
    <Footer />
  </div>
  )
}

export default App;
