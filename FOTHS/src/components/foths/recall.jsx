import React, { useState } from 'react';
import Score from '../multichoice/score';

function FillInTheBlank({ text, answers }) {
  const [userAnswers, setUserAnswers] = useState('');

  const handleInputChange = (index, event) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = event.target.value;
    setUserAnswers(newUserAnswers);
  };

  return (
    <div>
      <p>
        {text.split('_').map((part, index) => (
          <span key={index}>
            {part}
            {index < answers.length && (
              <input
                type="text"
                value={userAnswers[index]}
                onChange={(e) => handleInputChange(index, e)}
              />
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

export default FillInTheBlank;
