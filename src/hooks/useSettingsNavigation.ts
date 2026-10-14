// управляет открытием и закрытием экрана Settings
import { useState } from "react";

const useSettingsNavigation = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = (): void => {
    setIsSettingsOpen(true);
  };

  const closeSettings = (): void => {
    setIsSettingsOpen(false);
  };

  return {
    isSettingsOpen,
    openSettings,
    closeSettings,
  };
};

export default useSettingsNavigation;