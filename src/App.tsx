import React, { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import Flashcard from "./components/Flashcard";
import MasteredList from "./components/MasteredList";
import "./components/App.css";

type Word = {
  word: string;
  translation: string;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>("");
  const [masteredWords, setMasteredWords] = useState<string[]>([]);

  const words: Record<string, Word[]> = {
    Spanish: [
      { word: "Hola", translation: "Hello" },
      { word: "Adiós", translation: "Goodbye" },
      { word: "Gracias", translation: "Thank you" },
      { word: "Por favor", translation: "Please" },
      { word: "Amor", translation: "Love" },
    ],
    French: [
      { word: "Bonjour", translation: "Hello" },
      { word: "Au revoir", translation: "Goodbye" },
      { word: "Merci", translation: "Thank you" },
      { word: "S'il vous plaît", translation: "Please" },
      { word: "Amour", translation: "Love" },
    ],
  };

  const handleMarkMastered = (word: string) => {
    if (!masteredWords.includes(word)) {
      setMasteredWords([...masteredWords, word]);
    }
  };

  return (
    <div className="app">
      <h1>🌍 Language Flashcards</h1>
      <LanguageSelector setLanguage={setLanguage} />
      {language && (
        <div className="content">
          <Flashcard
            words={words[language]}
            onMarkMastered={handleMarkMastered}
          />
          <MasteredList masteredWords={masteredWords} />
        </div>
      )}
    </div>
  );
};

export default App;