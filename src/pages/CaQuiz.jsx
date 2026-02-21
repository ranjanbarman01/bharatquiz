import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { currentAffairs } from "../data/currentAffairs";

function CaQuiz() {
  const { id } = useParams();
  const nav = useNavigate();

  const news = currentAffairs.find((item) => item.id === id);
  const originalQuestions = news?.mcqs;

  if (!originalQuestions || originalQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">No Quiz Available</h2>
      </div>
    );
  }

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(15);

  const currentQuestion = originalQuestions[index];
  const progress = ((index + 1) / originalQuestions.length) * 100;

  // ✅ Timer Logic (Fixed)
  useEffect(() => {
    if (time === 0) {
      if (!selected) {
        setSkipped((prev) => prev + 1);
      }
      moveNext();
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, selected]); // selected dependency add ki

  const handleOptionClick = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === currentQuestion.answer) {
      setCorrect((prev) => prev + 1);

      setTimeout(() => {
        moveNext();
      }, 800);
    } else {
      setWrong((prev) => prev + 1);
    }
  };

  // ✅ moveNext FIXED
  const moveNext = () => {
    setTime(60);
    setSelected(null);

    if (index + 1 < originalQuestions.length) {
      setIndex((prev) => prev + 1);
    } else {
      nav("/result", {
        state: {
          correct,
          wrong,
          skipped,
          total: originalQuestions.length,
        },
      });
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

    <div className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-xl border border-gray-200">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Current Affairs Quiz
          </h2>
          <p className="text-sm text-gray-500">
            Question {index + 1} of {originalQuestions.length}
          </p>
        </div>

        <div className={`px-4 py-2 rounded-xl text-white font-semibold text-sm shadow ${
          time <= 5
            ? "bg-red-500 animate-pulse"
            : "bg-indigo-600"
        }`}>
          ⏳ {time}s
        </div>

      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
        {currentQuestion.question}
      </h3>

      {/* Options */}
      <div className="space-y-4">
        {currentQuestion.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleOptionClick(opt)}
            className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 font-medium ${
              selected
                ? opt === currentQuestion.answer
                  ? "bg-green-500 text-white border-green-500"
                  : opt === selected
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-400 border-gray-200"
                : "bg-white hover:bg-indigo-50 hover:border-indigo-400 border-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Manual Next Button */}
      {selected && selected !== currentQuestion.answer && (
        <button
          onClick={moveNext}
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md"
        >
          Next Question →
        </button>
      )}

    </div>

  </div>
);
}

export default CaQuiz;