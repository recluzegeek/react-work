import React, { useState } from "react";
import "./App.css";
import { questionsDatabase as questions } from "./data";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) =>
    id !== selectedId ? setSelectedId(id) : setSelectedId(null);

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => handleClick(question.id)}
          key={question.id}
          className={question.id === selectedId && "selected"}
        >
          <p>
            {question.id === selectedId
              ? question.correctAnswer
              : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
