import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const nav = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;
  const correct = location.state?.correct || 0;
  const wrong = location.state?.wrong || 0;

  const skipped = total - (correct + wrong);

  const percentage = total
    ? Math.round((score / total) * 100)
    : 0;

  const accuracy =
    correct + wrong
      ? Math.round((correct / (correct + wrong)) * 100)
      : 0;

  const passed = percentage >= 50;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-300 flex items-center justify-center p-4">

      <div className="bg-white/80 backdrop-blur-xl w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/40 text-center transition-all duration-500">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🎉 Quiz Completed
        </h2>

        {/* Score Circle */}
        <div
          className={`w-36 h-36 mx-auto rounded-full flex items-center justify-center mb-6 text-3xl font-bold shadow-xl transition-all duration-500 ${
            passed
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {score} / {total}
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-center">

          <div className="bg-green-100 p-3 rounded-lg">
            <p className="text-xs text-gray-600">Correct</p>
            <p className="text-lg font-bold text-green-600">{correct}</p>
          </div>

          <div className="bg-red-100 p-3 rounded-lg">
            <p className="text-xs text-gray-600">Wrong</p>
            <p className="text-lg font-bold text-red-600">{wrong}</p>
          </div>

          <div className="bg-yellow-100 p-3 rounded-lg">
            <p className="text-xs text-gray-600">Skipped</p>
            <p className="text-lg font-bold text-yellow-600">{skipped}</p>
          </div>

          <div className="bg-blue-100 p-3 rounded-lg">
            <p className="text-xs text-gray-600">Accuracy</p>
            <p className="text-lg font-bold text-blue-600">{accuracy}%</p>
          </div>

        </div>

        {/* Percentage Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-700 ${
                passed
                  ? "bg-gradient-to-r from-green-400 to-green-600"
                  : "bg-gradient-to-r from-red-400 to-red-600"
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            {percentage}% Score
          </p>
        </div>

        {/* Status */}
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
            passed
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {passed ? "Passed ✅" : "Needs Improvement ❌"}
        </div>

        {/* Motivation Text */}
        <p className="text-gray-600 text-sm mb-6">
          {passed
            ? "Great job! Keep practicing and aim even higher 🚀"
            : "Don’t worry. Practice more and come back stronger 💪"}
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => nav("/")}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Go Home
          </button>

          <button
            onClick={() => nav(-1)}
            className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Try Again
          </button>
        </div>

      </div>
    </div>
  );
}

export default Result;
