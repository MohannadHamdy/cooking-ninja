import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "SWITCH":
      return { ...state, mode: action.payload };

    default:
      return { ...state };
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "green",
    mode: "light",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const toggleMode = (mode) => {
    dispatch({ type: "SWITCH", payload: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
// create context
// create function to provide context value
// use context where you need to

// reducer takes function & initial state, and returns new state & dispatch
// change color is a fnc that takes color and pass it into the dispatch payload to change the color
