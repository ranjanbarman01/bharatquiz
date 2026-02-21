import { useParams, useNavigate } from "react-router-dom";
import { pyqData } from "../data/pyqData";

function PyqPapers() {
  const { exam, post } = useParams();
  const nav = useNavigate();

  const years = Object.keys(pyqData[exam]?.[post] || {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 p-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 capitalize">
          {post} Previous Papers
        </h1>
        <p className="text-gray-600 mt-3">
          Select a year to start practicing 🚀
        </p>
      </div>

      {/* Papers Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {years.map((year) => {
          const questionCount =
            pyqData[exam]?.[post]?.[year]?.length || 0;

          return (
            <div
              key={year}
              onClick={() => nav(`/pyq/${exam}/${post}/${year}`)}
              className="group bg-white/60 backdrop-blur-xl border border-white/30 
                         p-8 rounded-2xl shadow-xl cursor-pointer 
                         transition-all duration-500 hover:scale-105 
                         hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Year Title */}
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                {year}
              </h2>

              {/* Question Count */}
              <p className="text-gray-600 text-sm mb-6">
                {questionCount} Questions Available
              </p>

              {/* CTA */}
              <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Start Paper →
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default PyqPapers;
