import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./Theme/ThemeContext.jsx";
import { FontProvider } from "./FontContext/FontContext.jsx";
import { WordProvider } from "./WordContext/WordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <WordProvider>
          <App />
        </WordProvider>
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>
);
