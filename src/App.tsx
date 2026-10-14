import "./App.css";
import CalculatorDisplay from "./components/CalculatorDisplay";
import CalculatorKey from "./components/CalculatorKey";
import useCalculator from "./hooks/useCalculator";
import SettingsButton from "./components/SettingsButton";
import SettingsScreen from "./components/SettingsScreen";
import useSettingsNavigation from "./hooks/useSettingsNavigation";
import useCalculatorTheme from "./hooks/useCalculatorTheme";

const KEYS = [
  "AC", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "=",
];

const App = () => {
  const { display, handlePress } = useCalculator();

  const {
    isSettingsOpen,
    openSettings,
    closeSettings,
  } = useSettingsNavigation();

  const { theme, changeTheme } = useCalculatorTheme();

  if (isSettingsOpen) {
    return <SettingsScreen
      onBack={closeSettings}
      theme={theme}
      onThemeChange={changeTheme} />;
  }

  return (
    <main className={`app theme-${theme}`}>

      <header className="header">
        <SettingsButton onClick={openSettings} />
      </header>

      <CalculatorDisplay value={display} />

      <section className="keypad" aria-label="Calculator keypad">
        {KEYS.map((key) => (
          <CalculatorKey
            key={key}
            label={key}
            onPress={handlePress}
          />
        ))}
      </section>

    </main>
  )

}
export default App;