import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Quiz = () => {
  const [showModal, setShowModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const questions = [
    {
      question: 'What are the gases that are not included in the carbon emissions gases?',
      options: ['Carbon Dioxide',
        'Methane',
        'Fluorinated Gases',
        'Nitrogen'],
      correctAnswer: 'itrogen',
    },
    {
      question: 'How is Carbon Emissions Affecting Climate change?',
      options: [ 'Carbon Emissions traps heat in the atmosphere, causing the planet to be warmer and changes the weather patterns.',
        'Carbon Emissions affect climate change by allowing the heat to release from the Earth causing the country to be colder than it should be.',
       ' Carbon Emission traps cold air in the atmosphere changing the weather patterns',
       ' Carbon Emission traps cold air in the atmosphere and causes the people on the land to suffer in heat.'
        ],
      correctAnswer: 'Carbon Emissions traps heat in the atmosphere, causing the planet to be warmer and changes the weather patterns.',
    },
   
    {
      question: 'What is the likely sickness from a person when the climate changes caused by the greenhouse gases?',
      options: ['Heat stroke',
       ' Joint pain',
        'Stomach ache',
        'Cough'],
      correctAnswer: 'Heat stroke',
    },
    {
        question: 'Which of these are the benefits of reducing carbon emission?',
        options: ['Reduce climate change',
           ' Improve air quality ',
            'Reduce wildfire chances',
            'All of the above'],
        correctAnswer: 'All of the above',
    } 
    
    ,
    {
        question: 'What health problems would not change if people reduce their carbon emissions? ',
        options: [' Heat stroke',
            'Bronchitis ',
            'Stomach ache',
            'All of the above'],
        correctAnswer: 'Stomach ache',
    }
   
     
 
     
    
    
    
  ];

  const handleStartQuiz = () => {
    setShowModal(true);
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmitQuiz = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
    setShowResultModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowResultModal(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption('');
  };

  const calculatePercentage = () => {
    const correctCount = answers.reduce((count, answer, index) => {
      const question = questions[index];
      if (answer === question.correctAnswer) {
        return count + 1;
      }
      return count;
    }, 0);
    const percentage = (correctCount / questions.length) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div class="col-lg-12">
        <h3>Wanna Test your knowledge?</h3>
    <div>
      {!showModal ? (
        <div className='d-flex justify-content-center align-items-center vh-50'>
            <Button variant="primary" onClick={handleStartQuiz}>
            Start Quiz
            </Button>
        </div>
      ) : null}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentQuestion < questions.length ? (
            <div>
              <p>{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? 'success' : 'outline-primary'}
                  className="mr-2"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          ) : (
            <p>You have completed the quiz. Click "Submit" to see your results.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {currentQuestion < questions.length - 1 ? (
            <Button variant="primary" onClick={handleNextQuestion}>
              Next
            </Button>
          ) : (
            <Button variant="success" onClick={handleSubmitQuiz}>
              Submit
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showResultModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Results:</p>

          {questions.map((question, index) => (
            <p key={index}>
              Question: {question.question}
              <br />
              Your Answer: {answers[index]}
              <br />
              Correct Answer: {question.correctAnswer}
            </p>
          ))}
          <p>Your Score: {calculatePercentage()}%</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default Quiz;

