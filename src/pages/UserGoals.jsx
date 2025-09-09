import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";
import "../css/Onboarding.css";

function UserGoals() {
  const { goals, setGoals } = useOnboarding();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    if (goals.includes(value)) {
      setGoals(goals.filter((item) => item !== value));
    } else {
      setGoals([...goals, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goals.length === 0) {
      setError("Please select at least one option");
      return;
    }
    setError("");
    // alert(goals.join(", "));
    navigate("/splits");
  };

  return (
    <div className="body">
      <h1>Let's customize your experience</h1>
      <h2>What goals do you have regarding the gym?</h2>
      <form onSubmit={handleSubmit} className="exp-form">
        {error && <h3 className="error">{error}</h3>}
        <div className="form-options">
          <div class="form-check" className="hypertrophy-box">
            <input
              class="form-check-input"
              type="checkbox"
              value="Box 1"
              onChange={handleCheckboxChange}
              id="checkDefault"
            />
            <label class="form-check-label" for="checkDefault">
              Building muscle (hypertrophy)
            </label>
          </div>

          <div class="form-check" className="short-on-time-box">
            <input
              class="form-check-input"
              type="checkbox"
              value="Box 2"
              onChange={handleCheckboxChange}
              id="checkDefault"
            />
            <label class="form-check-label" for="checkDefault">
              Develop overall fitness with <b>limited training days</b>
            </label>
          </div>

          <div class="form-check" className="-box">
            <input
              class="form-check-input"
              type="checkbox"
              id="checkDefault"
              value="Box 3"
              onChange={handleCheckboxChange}
            />
            <label class="form-check-label" for="checkDefault">
              Building muscle with a focus on <b>individual muscle groups</b>
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-secondary" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserGoals;
