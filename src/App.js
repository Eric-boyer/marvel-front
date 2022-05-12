// imports routes
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports pages
import Comics from "./pages/Comics";
import Charactere from "./pages/Charatere";
import Characters from "./pages/Characters";

//imports components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/charactere" element={<Charactere />} />
      </Routes>
    </Router>
  );
}

export default App;
