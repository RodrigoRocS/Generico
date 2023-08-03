import PropTypes from "prop-types";
import { useState, useMemo, useCallback } from "react";
import GeneralContext from "./GeneralContext";

export default function GeneralProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const values = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
      handleThemeToggle,
    }),
    [isDarkMode, setIsDarkMode, handleThemeToggle]
  );

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
