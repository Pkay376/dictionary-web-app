import { useContext } from "react";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import WordBody from "./WordBody/WordBody";
import { ThemeContext } from "./Theme/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <main className={darkMode ? "dark-Mode" : ""}>
        <NavBar />
        <SearchBar />
        <WordBody />
      </main>
    </>
  );
}

export default App;
