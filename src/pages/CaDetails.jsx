import { useParams, useNavigate } from "react-router-dom";
import { currentAffairs } from "../data/currentAffairs";

function CaDetails() {
  const { id } = useParams();
  const nav = useNavigate();

  const news = currentAffairs.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700">
          News Not Found
        </h2>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-white">

    {/* Title Section */}
    <div className="border-b border-gray-200 bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {news.title}
        </h1>

        <div className="text-sm text-gray-600 flex gap-4">
          <span>{news.category}</span>
          <span>•</span>
          <span>{news.date}</span>
        </div>

      </div>
    </div>

    {/* Content Section */}
    <div className="max-w-4xl mx-auto px-6 py-10">

      <p className="text-gray-800 text-lg leading-relaxed mb-12">
        {news.description}
      </p>

      {/* Quiz Section */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-sm">

  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-1">
      Test Your Knowledge 🧠
    </h3>
    <p className="text-sm text-gray-600">
      Attempt MCQs based on this news and strengthen your preparation.
    </p>
  </div>

  <button
    onClick={() => nav(`/current-affairs/${id}/quiz`)}
    className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
  >
    Start Quiz →
  </button>

</div>

    </div>
  </div>
);
}

export default CaDetails;