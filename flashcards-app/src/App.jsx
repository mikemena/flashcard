import React, { useState } from 'react';
import './App.css';
import questions from './data/questionsData';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleCardClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards" role="list">
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
