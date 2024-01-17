/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";
import { FontContext } from "../FontContext/FontContext";
import { WordContext } from "../WordContext/WordContext";
const WordBody = () => {
  const { darkMode } = useContext(ThemeContext);
  const { selectedFont } = useContext(FontContext);
  const {
    wordDefinition,
    errorMessage,
    setErrorMessage,
    emptyInput,
    playAudio,
  } = useContext(WordContext);

  if (errorMessage && !emptyInput)
    return (
      <main
        style={{ fontFamily: selectedFont }}
        className="w-11/12 mx-auto px-4 py-8 h-screen"
      >
        <section className="text-center text-xs h-screen">
          🫤
          <p
            className={
              darkMode ? "text-white font-bold" : "text-black font-bold"
            }
          >
            No Definitions Found
          </p>
          <p className={darkMode ? "text-white" : "text-black"}>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </section>
      </main>
    );

  return (
    <main
      style={{ fontFamily: selectedFont }}
      className="w-11/12 mx-auto px-4 py-8 h-screen"
    >
      {!wordDefinition ? (
        <section className="text-center text-xs h-screen">
          <p
            className={
              darkMode ? "text-white font-bold" : "text-black font-bold"
            }
          >
            Please Enter a Word
          </p>
        </section>
      ) : (
        <>
          <section className="flex justify-between items-center">
            <div>
              <p
                className={`text-3xl  2xl:text-4xl font-bold text-left ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {wordDefinition.word}
              </p>
              <p className="text-purple-600 2xl:text-lg">
                {wordDefinition.phonetics[0].text || wordDefinition.word}
              </p>
            </div>
            <div className="w-24">
              <BsFillPlayCircleFill
                onClick={playAudio}
                className={`w-16 h-16 mx-auto ${
                  darkMode
                    ? "bg-purple-200 text-purple-900 opacity-50"
                    : "bg-purple-600 text-purple-200"
                }  rounded-full cursor-pointer hover:text-purple-600 hover:bg-white`}
              />
            </div>
          </section>
          <section className="flex items-center gap-5 py-5">
            <div className="px-1">
              <p
                className={`italic font-semibold ${
                  darkMode ? "text-white" : ""
                }`}
              >
                {wordDefinition.meanings[0].partOfSpeech}
              </p>
            </div>
            <div className="w-11/12">
              <hr className="w-full" />
            </div>
          </section>
          <section className="w-11/12">
            <div className="">
              <p className="text-gray-400 xl:text-lg">Meaning</p>
            </div>
            <div className="w-11/12 mx-auto px-2 py-4">
              <ul
                className={`list-disc text-sm lg:text-md xl:text-lg ${
                  darkMode ? "text-white dotStyle" : ""
                } leading-6`}
              >
                {wordDefinition.meanings[0].definitions
                  .slice(0, 3)
                  .map((word, index) => (
                    <li className="mb-4" key={index}>
                      <p>{word.definition}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
          <section className="flex gap-5">
            <div>
              <p className="text-gray-400 text-sm xl:text-lg">Synonyms</p>
            </div>
            <div>
              <ul className="text-purple-600 text-sm xl:text-lg font-bold  grid grid-cols-2 gap-1">
                {wordDefinition.meanings[0].synonyms.map((synonym, index) => (
                  <li key={index}>{synonym}</li>
                )) ||
                  wordDefinition.meanings[1].synonyms.map((synonym, index) => (
                    <li key={index}>{synonym}</li>
                  ))}
              </ul>
            </div>
          </section>
          <section className="flex items-center gap-5 py-5">
            <div className="px-1">
              <p
                className={`italic font-semibold ${
                  darkMode ? "text-white" : ""
                }`}
              >
                {wordDefinition.meanings[1]?.partOfSpeech || ""}
              </p>
            </div>
            <div className="w-11/12">
              <hr className="w-full" />
            </div>
          </section>
          <section className="w-11/12">
            <div className="">
              <p className="text-gray-400 xl:text-lg">Meaning</p>
            </div>
            <div className="w-11/12 mx-auto px-2 py-4">
              <ul
                className={`list-disc text-sm lg:text-md xl:text-lg ${
                  darkMode ? "text-white dotStyle" : ""
                } `}
              >
                <li className="mb-4">
                  <p>
                    {wordDefinition.meanings[1]?.definitions[0]?.definition ||
                      ""}
                  </p>

                  <p className="text-gray-400 text-sm lg:text-md 2xl:text-lg ">
                    {wordDefinition.meanings[0]?.definitions[0]?.example ||
                      wordDefinition.meanings[1]?.definitions[0]?.example ||
                      ""}
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex gap-5">
            <div>
              <p className="text-gray-400 text-xs lg:text-sm xl:text-lg">
                Source
              </p>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-2">
                  <a
                    className={`text-xs xl:text-lg underline  ${
                      darkMode ? "text-white" : "text-gray-900"
                    } cursor-pointer`}
                  >
                    {wordDefinition.sourceUrls}
                  </a>
                  <FiExternalLink className="text-xs 2xl:text-lg cursor-pointer" />
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
    </main>
  );
};
export default WordBody;
