// Цветовые темы
import { useState } from "react";

export type CalculatorTheme = "ios" | "android";

const THEME_STORAGE_KEY = "parogr-calculator-theme";

const getInitialTheme = (): CalculatorTheme => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  return savedTheme === "ios" || savedTheme === "android"
    ? savedTheme
    : "android";
};

const useCalculatorTheme = () => {
  const [theme, setTheme] = useState<CalculatorTheme>(getInitialTheme);

  const changeTheme = (nextTheme: CalculatorTheme): void => {
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return {
    theme,
    changeTheme,
  };
};

export default useCalculatorTheme;