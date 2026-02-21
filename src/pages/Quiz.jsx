import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data/questions";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

function Quiz() {
  const nav = useNavigate();
  const { subject, subcategory, series } = useParams();

  const originalData =
    questions[subject]?.[subcategory]?.[series];

  if (!originalData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Quiz Not Found</h2>
      </div>
    );
  }

  const [quizData] = useState(() =>
    shuffleArray(originalData).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }))
  );

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(15);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const currentQuestion = quizData[index];
  const progress = ((index + 1) / quizData.length) * 100;

  // Timer
  useEffect(() => {
    if (time === 0) {
      moveToNext();
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const handleOptionClick = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
      setCorrect((prev) => prev + 1);

      // ✅ Correct answer → auto next
      setTimeout(() => {
        moveToNext();
      }, 800);
    } else {
      setScore((prev) => prev - 0.25);
      setWrong((prev) => prev + 1);
    }
  };

  const moveToNext = () => {
    setTime(60);
    setSelected(null);

    if (index + 1 < quizData.length) {
      setIndex((prev) => prev + 1);
    } else {
      nav("/result", {
        state: {
          score,
          total: quizData.length,
          correct,
          wrong,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-300 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-xl p-8 rounded-2xl shadow-2xl border border-white/40">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
              {subject} Quiz
            </h2>
            <p className="text-xs text-gray-500">
              Score: <span className="font-bold text-indigo-600">{score}</span>
            </p>
          </div>

          <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${
            time <= 5
              ? "bg-red-500 text-white animate-pulse"
              : "bg-indigo-600 text-white"
          }`}>
            ⏳ {time}s
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Question {index + 1}</span>
            <span>{quizData.length} Total</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((opt, i) => {
            const letters = ["A", "B", "C", "D"];

            return (
              <button
                key={opt}
                onClick={() => handleOptionClick(opt)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                  selected
                    ? opt === currentQuestion.answer
                      ? "bg-green-500 text-white"
                      : opt === selected
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-400"
                    : "bg-white hover:bg-indigo-50"
                }`}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold">
                  {letters[i]}
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {selected && selected !== currentQuestion.answer && (
          <button
            onClick={moveToNext}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
          >
            Next Question →
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
