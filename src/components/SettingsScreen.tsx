// отображает Settings
import type { CalculatorTheme } from "../hooks/useCalculatorTheme";
type SettingsScreenProps = {
  onBack: () => void;
  theme: CalculatorTheme;
  onThemeChange: (theme: CalculatorTheme) => void;
};

const SettingsScreen = ({ onBack, theme,
  onThemeChange}: SettingsScreenProps) => {
  return (
    <main className={`app theme-${theme}`}>
      <header className="header settings-header">
        <button
          className="back-button"
          type="button"
          onClick={onBack}
        >
          Back
        </button>

        <h1>Settings</h1>
      </header>

      <section className="settings-content">
        <h2>Theme</h2>

        <div className="theme-options">
          <button
            type="button"
            className={`theme-option ${theme === "ios" ? "selected" : ""}`}
            onClick={() => onThemeChange("ios")}
            aria-pressed={theme === "ios"}
          >
            iOS style
          </button>

          <button
            type="button"
            className={`theme-option ${theme === "android" ? "selected" : ""}`}
            onClick={() => onThemeChange("android")}
            aria-pressed={theme === "android"}
          >
            Android style
          </button>
        </div>
      </section>
    </main>
  );
};

export default SettingsScreen;