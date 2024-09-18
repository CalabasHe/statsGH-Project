import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage.jsx";
import AboutPage from "./pages/about.jsx";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
