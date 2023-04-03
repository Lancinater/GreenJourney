


import React, { useState } from 'react';
import styles from './Quiz.module.css';

const Quiz = () => {
  const questions = [
  {
    question: 'What are the causes of carbon emission in Australia ranked?',
    options: [
      'Energy production → Transport → Agriculture → waste',
      'Transport → Energy production → Agriculture → waste',
      'Agriculture → Energy production → Transport → Waste',
      'Waste → Agriculture → Energy Production → Transport'
    ],
    correctAnswer: 0
  },
  
  {
    question: 'Estimate how much carbon emission Australia produced.',
    options: [
      
      '200 to 400 Metric Tons',
      '400 to 600 Metric Tons',
      '600 to 800 Metric Tons'
    ],
    correctAnswer: 0
  },
  {
    question: 'How much percentage (%) did transportation contribute to carbon emissions in Australia alone?',
    options: [
      '10% to 15%',
      '15% to 20%',
      '20% to 30%',
    ],
    correctAnswer:0 
  },
  {
    question: 'Does Fluorinated gases has the highest global warming potential?',
    options: [
      'Yes',
      'Not',      
    ],
    correctAnswer: 0
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    setShowAnswer(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
    }
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(-1);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(-1);
    setShowAnswer(false);
    setNumCorrectAnswers(0);
  };

  return (
    <div className={styles.quiz}>
      <h1>Quiz</h1>
      <p className="question">{questions[currentQuestion].question}</p>
      <form>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className={styles.option}>
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={index}
              checked={selectedOption === index}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}

        <div className={styles['button-container']}>
          <button type="button" onClick={handleSubmit} disabled={selectedOption === -1}>
            Submit
          </button>
        </div>
      </form>
      {showAnswer && (
        <div>
          {selectedOption === questions[currentQuestion].correctAnswer ? (
            <p>Correct! You are so Good! </p>
          ) : (
            <p>
              Incorrect. The correct answer is:{' '}
              {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
            </p>
          )}
          {currentQuestion < questions.length - 1 ? (
            <div className={styles['button-container']}>
              <button onClick={handleNext}>Next Question</button>
            </div>
          ) : (
            <div>
              <p>You have completed the quiz.</p>
              <p>
                Your overall accuracy is:{' '}
                {((numCorrectAnswers / questions.length) * 100).toFixed(2)}%
              </p>
              <div className={styles['button-container']}>
                <button onClick={handleReset}>Reset Quiz</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
