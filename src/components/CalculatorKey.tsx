//Компонент - Передаёт нажатие в App

type CalculatorKeyProps = {
  label: string;
  onPress: (value: string) => void;
};

const CalculatorKey = ({ label, onPress }: CalculatorKeyProps) => {
    const isOperator = ["÷", "×", "−", "+", "="].includes(label);

    return (
         <button
      className={`key ${isOperator ? "operator" : ""} ${
        label === "0" ? "zero" : ""
      }`}
      onClick={() => onPress(label)}
      aria-label={label}
    >
      {label}
    </button>
    )
}
export default CalculatorKey