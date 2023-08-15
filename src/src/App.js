import React from "react";
import Headers from './Components/Headers/index.js';
import Home from './Components/Home/index.js';
import Contact from "./Components/Contact/index.js";
import About from "./Components/About/index.js";
import Not from "./Components/notFound/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exac path="/about" element={<About/>}/>
        <Route path="*" element={<Not/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
