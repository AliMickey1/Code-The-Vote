import React, { useState } from "react";
import "../App.css"; // Make sure this path is correct

const Quiz = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const quizzes = [
    {
      category: "Voting History",
      title: "Quiz 1",
      questions: [
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
            { text: "They can only vote once like any other citizen.", isCorrect: false },
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
      ],
    },
    {
      category: "Misinformation",
      title: "Quiz 2",
      questions: [
        {
          question:
            "What does gerrymandering refer to?",
          answers: [
            { text: "Online voting in federal elections", isCorrect: false },
            { text: "Manipulating electoral district boundaries to favor a particular political party", isCorrect: true },
            { text: "Voter suppression tactics", isCorrect: false },
            { text: "Voter registration requirements", isCorrect: false },
          ],
        },
        {
          question:
            "What is voter suppression?",
          answers: [
            { text: "Allowing convicted felons to vote", isCorrect: false },
            { text: "Manipulating voter registration databases", isCorrect: false },
            { text: "Intentionally making it difficult for certain groups to vote", isCorrect: true },
            { text: "Encouraging early voting", isCorrect: false },
          ],
        },
        {
          question:
            "Who oversees federal elections in the United States?",
          answers: [
            { text: "Federal Bureau of Investigation (FBI)", isCorrect: false },
            { text: "Central Intelligence Agency (CIA)", isCorrect: false },
            { text: "Federal Election Commission (FEC)", isCorrect: true },
            { text: "National Security Agency (NSA)", isCorrect: false },
          ],
        },
        {
          question:
            "What is the purpose of voter registration?",
          answers: [
            { text: "To determine which political party a voter supports", isCorrect: false },
            { text: "To verify a voter's identity and eligibility to vote", isCorrect: true },
            { text: "To collect demographic information about voters", isCorrect: false },
            { text: "To count the number of eligible voters in each state", isCorrect: false },
          ],
        },
        {
          question:
            "What is the electoral college in the U.S. presidential election?",
          answers: [
            { text: "A group of people who directly elect the President and Vice President", isCorrect: true },
            { text: "A system where voters directly elect the President and Vice President", isCorrect: false },
            { text: "A process to verify voter IDs at polling stations", isCorrect: false },
            { text: "A system of political party conventions", isCorrect: false },
          ],
        },
        {
          question:
            "What role do exit polls play in elections?",
          answers: [
            { text: "They influence voting behavior by providing real-time results", isCorrect: true },
            { text: "They help predict election outcomes before voting ends", isCorrect: false },
            { text: "They verify the accuracy of voter registration lists", isCorrect: false },
            { text: "They discourage early voting options", isCorrect: false },
          ],
        },
        {
          question:
            "What was the primary goal of the 15th Amendment to the United States Constitution, ratified in 1870?",
          answers: [
            { text: "Prohibiting poll taxes", isCorrect: false },
            { text: "Granting women the right to vote", isCorrect: false },
            { text: "Guaranteeing voting rights regardless of race", isCorrect: true },
            { text: "Lowering the voting age to 18", isCorrect: false },
          ],
        },
        {
          question:
            "What is the term for a process by which voters can propose new laws or amendments to the constitution directly?",
          answers: [
            { text: "Referendum", isCorrect: false },
            { text: "Primary election", isCorrect: false },
            { text: "Caucus", isCorrect: false },
            { text: "Initiative", isCorrect: true },
          ],
        },
        {
          question:
            "How many electors are there in the Electoral College?",
          answers: [
            { text: "100", isCorrect: false },
            { text: "435", isCorrect: false },
            { text: "538", isCorrect: true },
            { text: "270", isCorrect: false },
          ],
        },
        {
          question:
            "Which amendment to the U.S. Constitution abolished poll taxes as a requirement for voting?",
          answers: [
            { text: "15th Amendment", isCorrect: false },
            { text: "19th Amendment", isCorrect: false },
            { text: "24th Amendment", isCorrect: true },
            { text: "26th Amendment", isCorrect: false },
          ],
        },
      ],
    },
    // Add additional quizzes here
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentQuizIndex(0); // Reset quiz index to start from the first quiz in the selected category
    setCurrentQuestionIndex(0); // Reset question index
    setScore(0); // Reset score
  };

  const currentQuiz = selectedCategory !== null ? quizzes.find(quiz => quiz.category === selectedCategory) : null;

  if (!currentQuiz) {
    return (
      <div className="quiz-container">
        <h3>Please choose a category to start the quiz!</h3>
        {/* Provide UI for category selection */}
        <div>
          <button onClick={() => handleCategorySelect("Voting History")}>Voting History</button>
          <button onClick={() => handleCategorySelect("Misinformation")}>Misinformation</button>
          {/* Add more buttons for additional categories if needed */}
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  if (!currentQuestion) {
    // If no current question, move to the next quiz if available
    if (currentQuizIndex + 1 < quizzes.length) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      return (
        <div className="quiz-container">
          <div>All quizzes completed for {selectedCategory}!</div>
          {/* Provide UI for category selection or completion message */}
          <button onClick={() => setSelectedCategory(null)}>Select Another Category</button>
        </div>
      );
    }
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < currentQuiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Move to the next quiz if available
      if (currentQuizIndex + 1 < quizzes.length) {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        alert(`All quizzes completed for {selectedCategory}! Your total score is ${score}/${calculateTotalQuestions()}`);
      }
    }
  };

  const calculateTotalQuestions = () => {
    return quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
  };

  return (
    <div className="quiz-container">
      <h3>{currentQuiz.category}</h3>
      <h2>{currentQuiz.title}</h2>
      <p>{currentQuestion.question}</p>
      <div className="answer-section">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer.isCorrect)}
            className="answer-button"
          >
            {answer.text}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
