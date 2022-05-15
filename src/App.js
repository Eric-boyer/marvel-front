// imports routes
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// imports pages
import Comics from "./pages/Comics";
import Charactere from "./pages/Charactere";
import Characters from "./pages/Characters";
import Favoris from "./pages/Favoris";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


//imports components
import Header from "./components/Header";

function App() {
 
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/" element={<Characters />} />
        <Route path="/comics/:charactereId" element={<Charactere />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
