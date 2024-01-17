/* eslint-disable react/prop-types */
// FontContext.js
import { createContext, useReducer } from "react";

const FontContext = createContext();

const fontReducer = (state, action) => {
  switch (action.type) {
    case "SET_FONT":
      return action.payload;
    default:
      return state;
  }
};

const FontProvider = ({ children }) => {
  const [selectedFont, dispatch] = useReducer(fontReducer, "Roboto Mono");

  return (
    <FontContext.Provider value={{ selectedFont, dispatch }}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider };
