import { useParams, useNavigate } from "react-router-dom";
import { pyqData } from "../data/pyqData";

function PyqSubcategories() {
  const { exam } = useParams();
  const nav = useNavigate();

  const posts = Object.keys(pyqData[exam] || {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 p-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 capitalize">
          {exam} Previous Papers
        </h1>
        <p className="text-gray-600 mt-3">
          Select a post to continue
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {posts.map((post) => {
          const yearCount = Object.keys(pyqData[exam][post] || {}).length;

          return (
            <div
              key={post}
              onClick={() => nav(`/pyq/${exam}/${post}`)}
              className="group bg-white/60 backdrop-blur-xl border border-white/30 
                         p-6 rounded-2xl shadow-xl cursor-pointer 
                         transition-all duration-500 hover:scale-105 
                         hover:shadow-2xl hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">
                {post}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {yearCount} Years Available
              </p>

              <div className="text-indigo-600 font-semibold group-hover:translate-x-2 transition-all duration-300">
                View Papers →
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default PyqSubcategories;
