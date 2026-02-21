import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

function Subcategories() {
  const { subject } = useParams();
  const nav = useNavigate();

  const subjectData = questions[subject];

  if (!subjectData) {
    return <h2 className="text-center mt-20 text-2xl">Subject Not Found</h2>;
  }

  const subcategories = Object.keys(subjectData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 py-16 px-6">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-800 capitalize tracking-wide">
          {subject} Categories
        </h2>
        <p className="text-gray-700 mt-4 text-lg font-medium">
          Select a category and start your preparation 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {subcategories.map((sub, index) => (
          <div
            key={sub}
            onClick={() => nav(`/series/${subject}/${sub}`)}
            className="relative group bg-white/40 backdrop-blur-lg border border-white/30 
                       p-8 rounded-3xl shadow-xl cursor-pointer 
                       transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                       hover:-translate-y-2 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 
                            group-hover:opacity-10 transition duration-500 rounded-3xl"></div>

            {/* Number Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 capitalize mb-2">
              {sub}
            </h3>

            {/* Small Subtitle */}
            <p className="text-gray-600 text-sm">
              Click to view available series
            </p>

            {/* Bottom Line Animation */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-600 
                            group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Subcategories;
