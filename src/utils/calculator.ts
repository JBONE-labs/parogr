// Математические операции и лимит ввода - длинна числа в окне

export type Operator = "+" | "−" | "×" | "÷";

//ограничение длины вводимого числа. Сейчас оно равно 9
export const MAX_INPUT_LENGTH = 9;

//вычисляет результат и возвращает null, если операция невозможна
export const calculate = (
  first: number,
  second: number,
  operator: Operator
): number | null => {
  let result: number;

  switch (operator) {
    case "+":
      result = first + second;
      break;

    case "−":
      result = first - second;
      break;

    case "×":
      result = first * second;
      break;

    case "÷":
      if (second === 0) {
        return null;
      }

      result = first / second;
      break;
  }

  if (!Number.isFinite(result)) {
    return null;
  }

  return Number(result.toPrecision(12));
};

//убирает большинство лишних десятичных знаков, возникающих из-за особенностей вычислений с числами JavaScript
export const formatResult = (value: number): string => {
  return String(Number(value.toPrecision(12)));
};