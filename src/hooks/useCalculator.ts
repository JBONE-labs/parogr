//состояние, ввод и последовательность действий.
import { useState } from "react";

import {
  calculate,
  formatResult,
  MAX_INPUT_LENGTH,
  type Operator,
} from "../utils/calculator";

const OPERATORS: Operator[] = ["+", "−", "×", "÷"];

const useCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [startNewNumber, setStartNewNumber] = useState(false);

  const reset = (): void => {
    setDisplay("0");
    setStoredValue(null);
    setOperator(null);
    setStartNewNumber(false);
  };

  const handleDigit = (digit: string): void => {
    if (display === "Error" || startNewNumber) {
      setDisplay(digit);
      setStartNewNumber(false);
      return;
    }

    if (display.length >= MAX_INPUT_LENGTH) {
      return;
    }

    setDisplay((current) =>
      current === "0" ? digit : current + digit
    );
  };

  const handleDecimal = (): void => {
    if (display === "Error" || startNewNumber) {
      setDisplay("0.");
      setStartNewNumber(false);
      return;
    }

    if (
      display.includes(".") ||
      display.length >= MAX_INPUT_LENGTH
    ) {
      return;
    }

    setDisplay((current) => current + ".");
  };

  const handleOperator = (nextOperator: Operator): void => {
    if (display === "Error") {
      return;
    }

    if (storedValue !== null && operator !== null && !startNewNumber) {
      const result = calculate(
        storedValue,
        Number(display),
        operator
      );

      if (result === null) {
        setDisplay("Error");
        setStoredValue(null);
        setOperator(null);
        setStartNewNumber(true);
        return;
      }

      setDisplay(formatResult(result));
      setStoredValue(result);
    } else {
      setStoredValue(Number(display));
    }

    setOperator(nextOperator);
    setStartNewNumber(true);
  };

  const handleEquals = (): void => {
    if (storedValue === null || operator === null) {
      return;
    }

    const result = calculate(
      storedValue,
      Number(display),
      operator
    );

    setDisplay(result === null ? "Error" : formatResult(result));
    setStoredValue(null);
    setOperator(null);
    setStartNewNumber(true);
  };

  const handleSign = (): void => {
    if (display === "Error") {
      return;
    }

    const nextValue = String(-Number(display));

    if (nextValue.length <= MAX_INPUT_LENGTH) {
      setDisplay(nextValue);
    }
  };

  const handlePercent = (): void => {
    if (display === "Error") {
      return;
    }

    setDisplay(formatResult(Number(display) / 100));
  };

  const handlePress = (value: string): void => {
    if (value === "AC") {
      reset();
      return;
    }

    if (/^\d$/.test(value)) {
      handleDigit(value);
      return;
    }

    if (value === ".") {
      handleDecimal();
      return;
    }

    if (value === "+/-") {
      handleSign();
      return;
    }

    if (value === "%") {
      handlePercent();
      return;
    }

    if (value === "=") {
      handleEquals();
      return;
    }

    if (OPERATORS.includes(value as Operator)) {
      handleOperator(value as Operator);
    }
  };

  return {
    display,
    handlePress,
  };
};

export default useCalculator;