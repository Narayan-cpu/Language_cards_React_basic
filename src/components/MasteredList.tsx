import React from "react";
import "./App.css";

type Props = {
  masteredWords: string[];
};

const MasteredList: React.FC<Props> = ({ masteredWords }) => {
  return (
    <div className="mastered-list">
      <h2>Mastered Words</h2>
      {masteredWords.length === 0 ? (
        <p>No words mastered yet!</p>
      ) : (
        <ul>
          {masteredWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MasteredList;
