import React, { useState } from "react";
import "./App.css";

type Word = {
  word: string;
  translation: string;
};

type Props = {
  words: Word[];
  onMarkMastered: (word: string) => void;
};

const Flashcard: React.FC<Props> = ({ words, onMarkMastered }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);

  const handleNext = () => {
    setShowTranslation(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="flashcard">
      <div className="card">
        <p>{showTranslation ? words[currentIndex].translation : words[currentIndex].word}</p>
      </div>
      <div className="controls">
        <button onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? "Show Word" : "Show Translation"}
        </button>
        <button onClick={() => onMarkMastered(words[currentIndex].word)}>
          Mark as Mastered
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
