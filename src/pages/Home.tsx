import React, { useState } from 'react';
import StartScreen from '../components/StartScreen';
import QuizScreen from '../components/QuizScreen';
import ResultScreen from '../components/ResultScreen';
import { questions } from '../data/questions';

function Home() {
    const [gameState, setGameState] = useState<'start' | 'quiz' | 'result'>('start');
    const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
    const [score, setScore] = useState(0);

    const startQuiz = () => {
        setGameState('quiz');
        setAnswers(Array(questions.length).fill(-1));
        setScore(0);
    };

    const handleAnswer = (questionIndex: number, answerIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answerIndex;
        setAnswers(newAnswers);
    };

    const finishQuiz = () => {
        // Calculate score
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                correctAnswers++;
            }
        });

        const finalScore = Math.round((correctAnswers / questions.length) * 100);
        setScore(finalScore);
        setGameState('result');
    };

    const restartQuiz = () => {
        setGameState('start');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden">
                {gameState === 'start' && <StartScreen onStart={startQuiz} />}
                {gameState === 'quiz' && (
                    <QuizScreen
                        questions={questions}
                        answers={answers}
                        onAnswer={handleAnswer}
                        onFinish={finishQuiz}
                    />
                )}
                {gameState === 'result' && (
                    <ResultScreen
                        score={score}
                        answers={answers}
                        questions={questions}
                        onRestart={restartQuiz}
                    />
                )}
            </div>
        </div>
    );


}

export default Home;

