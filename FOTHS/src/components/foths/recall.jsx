import React, { useState } from 'react';

function FillInTheBlank({ text, answers }) {
    // let answers;
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
      {/* You can add validation and feedback here */}
    </div>
  );
}

export default FillInTheBlank;
