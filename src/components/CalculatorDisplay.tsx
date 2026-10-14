// Компонент - Показывает значение

type CalculatorDisplayProps = {
  value: string;
};

const CalculatorDisplay = ({value}: CalculatorDisplayProps) => {

    return (
 <section className="display" aria-live="polite">
      <span className="display-label">Result</span>
      <div className="display-value">{value}</div>
    </section>
    )
}
export default CalculatorDisplay