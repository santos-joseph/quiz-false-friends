import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import { CheckCircle, XCircle, RefreshCw, Award } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  answers: number[];
  questions: Question[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, answers, questions, onRestart }) => {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getResultMessage = () => {
    if (score < 40) {
      return {
        title: "Needs Improvement",
        message: "You're still learning about false friends. Keep practicing!",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/xT5LMHxhOfscxPfIfm/giphy.gif",
        icon: <XCircle size={64} className="text-red-500" />
      };
    } else if (score < 70) {
      return {
        title: "Good Job!",
        message: "You have a good understanding of false friends, but there's room for improvement.",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/l0MYJnJQ4EiYLxvQ4/giphy.gif",
        icon: <CheckCircle size={64} className="text-yellow-500" />
      };
    } else {
      return {
        title: "Excellent!",
        message: "You're a false friends expert! Congratulations on your amazing score!",
        gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJtZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZnRqZg/l0MYt5jPR6QX5pnqM/giphy.gif",
        icon: <Award size={64} className="text-green-500" />
      };
    }
  };

  const result = getResultMessage();

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <RefreshCw size={48} className="text-blue-600 animate-spin mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Calculating your results...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {result.icon}
        </div>
        <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
        <p className="text-gray-600 mb-4">{result.message}</p>
        <div className="mb-6">
          <div className="text-5xl font-bold text-blue-600 mb-2">{score}%</div>
          <p className="text-gray-500">
            You got {questions.filter((q, i) => answers[i] === q.correctAnswer).length} out of {questions.length} questions correct
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={result.gif}
            alt="Result animation"
            className="rounded-lg max-h-[200px]"
          />
        </div>
        <button
          onClick={toggleResults}
          className="text-blue-600 underline mb-6 inline-block"
        >
          {showResults ? "Hide Answers" : "Show Answers"}
        </button>
      </div>

      {showResults && (
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Question Review</h3>
          <div className="space-y-6">
            {questions.map((question, qIndex) => (
              <div key={qIndex} className="border-b pb-4 last:border-b-0">
                <p className="font-medium mb-2">{qIndex + 1}. {question.question}</p>
                <div className="space-y-2 ml-4">
                  {question.options.map((option, oIndex) => (
                    <div
                      key={oIndex}
                      className={`p-2 rounded ${oIndex === question.correctAnswer
                          ? 'bg-green-100 border-l-4 border-green-500'
                          : oIndex === answers[qIndex] && oIndex !== question.correctAnswer
                            ? 'bg-red-100 border-l-4 border-red-500'
                            : ''
                        }`}
                    >
                      {option}
                      {oIndex === question.correctAnswer && (
                        <span className="ml-2 text-green-600 text-sm">(Correct answer)</span>
                      )}
                      {oIndex === answers[qIndex] && oIndex !== question.correctAnswer && (
                        <span className="ml-2 text-red-600 text-sm">(Your answer)</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;