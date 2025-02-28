import React, { useState } from 'react';
import { Question } from '../data/questions';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizScreenProps {
  questions: Question[];
  answers: number[];
  onAnswer: (questionIndex: number, answerIndex: number) => void;
  onFinish: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, answers, onAnswer, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isQuizComplete = () => {
    return answers.every(answer => answer !== -1);
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Question {currentQuestion + 1} of {questions.length}</h2>
          <span className="text-sm text-gray-500">
            {answers.filter(a => a !== -1).length} of {questions.length} answered
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(currentQuestion + 1) / questions.length * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(currentQuestion, index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                answers[currentQuestion] === index 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
          className={`flex items-center px-4 py-2 rounded-lg ${
            currentQuestion === 0 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" /> Previous
        </button>

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={goToNextQuestion}
            className="flex items-center px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50"
          >
            Next <ChevronRight size={20} className="ml-1" />
          </button>
        ) : (
          <button
            onClick={onFinish}
            disabled={!isQuizComplete()}
            className={`px-6 py-2 rounded-lg font-medium ${
              isQuizComplete() 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;