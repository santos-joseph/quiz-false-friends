import React from 'react';
import { BookOpen } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="p-8 text-center">
      <div className="flex justify-center mb-6">
        <BookOpen size={64} className="text-blue-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">False Friends Quiz</h1>
      <p className="text-gray-600 mb-8">
        Test your knowledge of false friends between English and Portuguese!
        False friends are words that look similar in two languages but have different meanings.
        This quiz will help you identify common false friends that often confuse English and Portuguese speakers.
      </p>
      <p className="text-gray-600 mb-8">
        Answer all questions and see your final score. Good luck!
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;