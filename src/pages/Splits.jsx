import SplitCard from "../components/SplitCard";
import "../css/Splits.css";
import { useLocation } from "react-router-dom";
import { useOnboarding } from "../context/OnboardingContext";

export function Splits() {
  const { goals, experience } = useOnboarding();

  const location = useLocation();
  const splits = [
    {
      id: 1,
      name: "Upper Lower",
      info: "(UL info)",
    },
    {
      id: 2,
      name: "Push Pull Legs",
      info: "(PPL info)",
    },
    {
      id: 3,
      name: "Full Body",
      info: "(full body info)",
    },
    {
      id: 4,
      name: "'Bro' Split",
      info: "(Bro split info)",
    },
  ];

  function bestSplits() {}
  return (
    <>
      <div className="header">
        <h2>
          {goals}
          {experience}
        </h2>
        <h1>Find Your Perfect Split</h1>
      </div>
      <div className="splits-grid">
        {splits.map((split) => (
          <SplitCard
            id={split.id}
            name={split.name}
            info={split.info}
          ></SplitCard>
        ))}
      </div>
    </>
  );
}

export default Splits;
