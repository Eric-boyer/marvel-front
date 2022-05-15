// imports routes
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";
// imports pages
import Comics from "./pages/Comics";
import Charactere from "./pages/Charactere";
import Characters from "./pages/Characters";
import Favoris from "./pages/Favoris";

//imports components
import Header from "./components/Header";

function App() {
  const [favoris, setFavoris] = useState([]);
  return (
    <Router>
      <Header/>
     
      <Routes>
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/" element={<Characters />} />
        <Route path="/comics/:charactereId" element={<Charactere />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
