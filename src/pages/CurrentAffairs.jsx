import { useNavigate } from "react-router-dom";
import { currentAffairs } from "../data/currentAffairs";

function CurrentAffairs() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-10">
        Current Affairs
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {currentAffairs.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-3">
              {item.date} | {item.category}
            </p>

            <button
              onClick={() => nav(`/current-affairs/${item.id}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentAffairs;