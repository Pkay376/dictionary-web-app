/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../Theme/ThemeContext";
import { FontContext } from "../FontContext/FontContext";
import { WordContext } from "../WordContext/WordContext";

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);

  const { word, setWord, handleSearchWord, emptyInput, setEmptyInput } =
    useContext(WordContext);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <main
      style={{ fontFamily: selectedFont }}
      className="w-full px-4 md:px-2 lg:px-0 2xl:px-4"
    >
      <form
        onSubmit={handleSearchWord}
        className={`flex items-center w-11/12 mx-auto rounded-2xl px-4 py-4 ${
          darkMode ? "bg-gray-800 border-none" : "bg-gray-200"
        }   md:px-2`}
      >
        <input
          type="text"
          name=""
          value={word}
          placeholder="Search for any word..."
          onChange={handleChange}
          className={`w-11/12 h-8 mx-auto focus:outline-none  ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        />
        <CiSearch className="relative w-8 h-8 lg:w-10 lg:h-10 text-purple-600 opacity-100" />
      </form>
      {emptyInput ? (
        <p className="w-11/12 mx-auto px-4 py-1 text-red-400 text-xs">
          Whoops, can't be empty...
        </p>
      ) : (
        ""
      )}
    </main>
  );
};
export default SearchBar;
