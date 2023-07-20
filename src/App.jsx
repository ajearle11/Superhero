import { Route, Routes } from "react-router-dom";
import { SuperHeroInfo, Home } from "./pages/";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SuperHeroInfo />} />
    </Routes>
  );
}

export default App;
