import { useNavigate } from "react-router-dom";

function Categories() {
  const nav = useNavigate();
  
  const subjects = [
    "Mathematics",
    "Reasoning",
    "General Knowledge",
    "Indian Polity",
    "Economics",
    "Science & Nature",
    "History",
    "Entertainment"
  ];

 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-28 px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Explore Quiz Categories
      </h1>
      <p className="text-gray-600 mt-3 text-lg">
        Choose your subject and start mastering today
      </p>
    </div>

    {/* Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {subjects.map((subject, index) => (
        <div
          key={index}
          onClick={() =>
            nav(`/subject/${subject.toLowerCase().replace(/\s+/g, "-")}`)
          }
          className="bg-white/70 backdrop-blur-lg border border-white/30 
                     rounded-2xl p-8 shadow-lg 
                     hover:shadow-2xl hover:-translate-y-3 
                     hover:scale-105 transition duration-300 cursor-pointer text-center"
        >
          {/* Icon Circle */}
          <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center 
                          bg-blue-500 text-white rounded-full text-xl font-bold">
            {subject.charAt(0)}
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            {subject}
          </h2>
        </div>
      ))}

    </div>

  </div>
);

}

export default Categories;
