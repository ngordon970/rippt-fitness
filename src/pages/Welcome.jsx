import "../css/Welcome.css";
import { useNavigate } from "react-router-dom";
import SplitCard from "../components/SplitCard";

function Onboarding() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="top-header-h1">
        <h1>
          Optimize <span className="gradient-text">every aspect</span> of your
          fitness.
        </h1>
      </div>
      <div className="top-header-h2">
        <h2>Welcome to Rippt</h2>
      </div>
      <div className="user-setup">
        <button
          type="button"
          class="btn btn-secondary"
          className="get-started-btn"
          onClick={() => navigate("/experience")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
