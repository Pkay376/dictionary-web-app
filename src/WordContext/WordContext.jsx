/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import axios from "axios";

const WordContext = createContext();
const WordProvider = ({ children }) => {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [searchWord, setSearchWord] = useState(false);
  const [word, setWord] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSearchWord = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(response.data, "res");
      setWordDefinition(response.data[0]);
    } catch (error) {
      setErrorMessage(true);
      console.error("Failed to get word definition", error);
    }

    if (word.trim() === "") {
      setEmptyInput(true);
    }
  };

  function playAudio() {
    if (wordDefinition) {
      const phonetics = wordDefinition.phonetics;

      if (phonetics && phonetics.length > 0) {
        const audioURL = phonetics[0].audio;

        if (audioURL) {
          try {
            let audio = new Audio(audioURL);
            audio.play();
          } catch (e) {
            console.error("Failed to play audio", e);
          }
        } else {
          console.error("No audio URL found in phonetics");
        }
      } else {
        console.error("No phonetics data found");
      }
    } else {
      console.error("No word definition available");
    }
  }


  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        wordDefinition,
        setSearchWord,
        handleSearchWord,
        playAudio,
        emptyInput,
        setEmptyInput,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider };