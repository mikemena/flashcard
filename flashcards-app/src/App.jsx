import React, { useState } from 'react';
import './App.css';
import questions from './data/questionsData';

function App() {
  const [selectedId, setSelectedId] = React.useState(null);

  function handleCardClick(id) {
    setSelectedId(id);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleCardClick(question.id)}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
