type SettingsButtonProps = {
  onClick: () => void;
};

const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <button
      className="settings-button"
      type="button"
      onClick={onClick}
      aria-label="Open settings"
    >
      Settings
    </button>
  );
};

export default SettingsButton;