import Splits from "./pages/Splits";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import PrevExperience from "./pages/PrevExperience";
import UserGoals from "./pages/UserGoals";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/splits" element={<Splits />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<PrevExperience />} />
          <Route path="/UserGoals" element={<UserGoals />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
