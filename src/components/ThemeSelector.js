import "./ThemeSelector.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import modeIcon from "../assets/mode-icon.svg";

const themeColors = ["#58249c", "#249c6b", "#000"];

const ThemeSelector = () => {
  const { changeColor, toggleMode, mode } = useContext(ThemeContext);

  const switchMode = () => {
    toggleMode(mode === "light" ? "dark" : "light");
  };
  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={switchMode}
          alt="switch mode"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
