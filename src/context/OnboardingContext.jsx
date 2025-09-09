import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export function OnboardingProvider({ children }) {
  const [experience, setExperience] = useState("");
  const [goals, setGoals] = useState([]);

  return (
    <OnboardingContext.Provider
      value={{ experience, setExperience, goals, setGoals }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}
