// src/components/Quiz.js
import React, { useState, useEffect } from "react";
import "../App.css"; // Make sure this path is correct

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Data for quiz questions
    const data = [
      {
        question:
          "What role do Presidents play in election administration and security?",
        answers: [
          { text: "They oversee state elections.", isCorrect: false },
          {
            text: "They fund election administration and security through the federal budget.",
            isCorrect: true,
          },
          { text: "They directly count the votes.", isCorrect: false },
          { text: "They have no influence on elections.", isCorrect: false },
        ],
      },
      {
        question:
          "Who has the authority to hear cases about fair representation and access to the ballot box?",
        answers: [
          { text: "State Governors", isCorrect: false },
          { text: "Federal Judges", isCorrect: true },
          { text: "The President", isCorrect: false },
          { text: "Congress", isCorrect: false },
        ],
      },
      {
        question:
          "What percentage of U.S. adults say they experience stress as a result of the possibility of a mass shooting?",
        answers: [
          { text: "50%", isCorrect: false },
          { text: "60%", isCorrect: false },
          { text: "70%", isCorrect: false },
          { text: "79%", isCorrect: true },
        ],
      },
      {
        question:
          "Which demographic group is more likely to experience stress often or constantly related to the possibility of a mass shooting?",
        answers: [
          { text: "White non-Hispanic adults", isCorrect: false },
          { text: "Hispanic adults", isCorrect: true },
          { text: "Asian adults", isCorrect: false },
          { text: "Elderly adults", isCorrect: false },
        ],
      },
      {
        question:
          "Which places do U.S. adults commonly stress about the possibility of a mass shooting occurring?",
        answers: [
          {
            text: "Public event, mall, school, or university",
            isCorrect: true,
          },
          { text: "Gym, park, beach", isCorrect: false },
          { text: "Workplaces, homes, libraries", isCorrect: false },
          { text: "Museums, zoos, farms", isCorrect: false },
        ],
      },
      {
        question:
          "What role can Presidents play in shaping public trust in elections?",
        answers: [
          { text: "They have no role.", isCorrect: false },
          {
            text: "They can use their platform to promote election integrity or misinformation.",
            isCorrect: true,
          },
          { text: "They can change state election laws.", isCorrect: false },
          {
            text: "They can only vote once like any other citizen.",
            isCorrect: false },
        ],
      },
      {
        question:
          "According to the survey, what percentage of parents live in fear that their children will be victims of a mass shooting?",
        answers: [
          { text: "28%", isCorrect: false },
          { text: "35%", isCorrect: false },
          { text: "50%", isCorrect: false },
          { text: "62%", isCorrect: true },
        ],
      },
      {
        question:
          "What is a significant factor that Hispanic and African American adults struggle with more than white non-Hispanic adults regarding stress from mass shootings?",
        answers: [
          { text: "They do not experience stress.", isCorrect: false },
          { text: "They know how to cope with stress.", isCorrect: false },
          {
            text: "They do not know how to cope with stress.",
            isCorrect: true,
          },
          {
            text: "They are less likely to know someone who experienced a mass shooting.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is one of the key efforts to protect voting rights?",
        answers: [
          { text: "Unregulated campaign spending", isCorrect: false },
          { text: "Election protection programs", isCorrect: true },
          { text: "Partisan gerrymandering", isCorrect: false },
          { text: "Voter suppression", isCorrect: false },
        ],
      },
      {
        question: "What is a significant risk factor affecting voter safety?",
        answers: [
          { text: "Lack of access to public transportation", isCorrect: true },
          { text: "High property taxes", isCorrect: false },
          { text: "Proximity to industrial areas", isCorrect: false },
          { text: "High levels of tourism", isCorrect: false },
        ],
      },
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
    <div className="quiz-container">
      <h2>Quiz</h2>
      <p>{currentQuestion.question}</p>
      <div className="answer-section">
        {currentQuestion.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer.isCorrect)} className="answer-button">
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
