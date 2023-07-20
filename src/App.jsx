import { Route, Routes } from "react-router-dom";
import { SuperHeroInfo, Home } from "./pages/";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<SuperHeroInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
