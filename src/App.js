import HomePg from "./HomePg";
import { useState, createContext } from "react";
import ToggleMode from "./components/toggleMode";
export const ThemeContext = createContext(null);

function App() {

  const [modeIcon, setModeIcon] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <HomePg modeIcon={modeIcon} setModeIcon={setModeIcon} />
        <ToggleMode toggleTheme={toggleTheme} theme={theme} modeIcon={modeIcon} setModeIcon={setModeIcon} />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
