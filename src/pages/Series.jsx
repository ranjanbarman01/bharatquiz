import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

function Series() {
  const { subject, subcategory } = useParams();
  const nav = useNavigate();

  const subcategoryData = questions[subject]?.[subcategory];

  if (!subcategoryData) {
    return (
      <h2 className="text-center mt-20 text-2xl font-semibold">
        Series Not Found
      </h2>
    );
  }

  const seriesList = Object.keys(subcategoryData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 py-16 px-6">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-800 capitalize tracking-wide">
          {subcategory} Series
        </h2>
        <p className="text-gray-700 mt-4 text-lg font-medium">
          Choose a series and start your quiz journey 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {seriesList.map((ser, index) => (
          <div
            key={ser}
            onClick={() => nav(`/quiz/${subject}/${subcategory}/${ser}`)}
            className="relative group bg-white/40 backdrop-blur-lg border border-white/30 
                       p-4 rounded-2xl shadow-xl cursor-pointer 
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                       hover:-translate-y-2 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 
                            group-hover:opacity-10 transition duration-500 rounded-3xl"></div>

            {/* Number Badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 capitalize mb-2">
              {ser}
            </h3>

            {/* Question Count */}
            <p className="text-gray-600 text-sm mb-3">
              {subcategoryData[ser]?.length || 0} Questions
            </p>

            {/* Bottom Line Animation */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-600 
                            group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Series;
