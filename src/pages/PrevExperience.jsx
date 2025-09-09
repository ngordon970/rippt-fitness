import { useNavigate } from "react-router-dom";
import "../css/Onboarding.css";
import { useState } from "react";
import { useOnboarding } from "../context/OnboardingContext";

function PrevExperience() {
  const { experience, setExperience } = useOnboarding();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!experience) {
      setError("Please select an option");
      return;
    }
    setError("");
    navigate("/UserGoals");
  };

  return (
    <div className="body">
      <h1>Let's customize your experience</h1>
      <h2>What best describes your experience level in the gym?</h2>
      <form onSubmit={handleSubmit} className="exp-form">
        {error && <h3 className="error">{error}</h3>}
        <div className="form-options">
          <label>
            <input
              type="radio"
              name="experience"
              value="No experience"
              checked={experience === "No experience"}
              onChange={(e) => setExperience(e.target.value)}
            ></input>
            <span>Little to no experience (Less than 1 month)</span>
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="Some experience"
              checked={experience === "Some experience"}
              onChange={(e) => setExperience(e.target.value)}
            ></input>
            Some experience (1-12 months)
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="Very experienced"
              checked={experience === "Very experienced"}
              onChange={(e) => setExperience(e.target.value)}
            />
            Very experienced (12+ months)
          </label>
        </div>
        <button type="submit" class="btn btn-secondary" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PrevExperience;
