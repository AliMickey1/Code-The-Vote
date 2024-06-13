// src/components/Quiz.js
import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Mock data for quiz questions
    const data = [
      {
        question: "What is one of the key efforts to protect voting rights?",
        answers: [
          { text: "Unregulated campaign spending", isCorrect: false },
          { text: "Election protection programs", isCorrect: true },
          { text: "Partisan gerrymandering", isCorrect: false },
          { text: "Voter suppression", isCorrect: false }
        ]
      },
      {
        question: "What is a significant risk factor affecting voter safety?",
        answers: [
          { text: "Lack of access to public transportation", isCorrect: true },
          { text: "High property taxes", isCorrect: false },
          { text: "Proximity to industrial areas", isCorrect: false },
          { text: "High levels of tourism", isCorrect: false }
        ]
      }
    ];
    setQuizData(data);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
    }
  };

  if (quizData.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div>
      <h2>Quiz</h2>
      <p>{currentQuestion.question}</p>
      {currentQuestion.answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
