import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comonents/Navbar";
import Home from "./comonents/Home";
import About from "./comonents/About";
import Login from "./containers/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route> 404 Error </Route>
      </Routes>
    </Router>
  );
}

export default App;
