import React from "react";
import "./App.css";

type Props = {
  setLanguage: (language: string) => void;
};

const LanguageSelector: React.FC<Props> = ({ setLanguage }) => {
  return (
    <div className="language-selector">
      <h2>Select a Language</h2>
      <button className="language-button" onClick={() => setLanguage("Spanish")}>
        Spanish
      </button>
      <button className="language-button" onClick={() => setLanguage("French")}>
        French
      </button>
    </div>
  );
};

export default LanguageSelector;
