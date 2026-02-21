import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  const nav = useNavigate();
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center">
        <img
          src={`${base}hero.png`}
          alt="BharatQuiz Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-20 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Crack Government Exams with{" "}
            <span className="text-orange-500">BharatQuiz</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Practice Daily Quizzes, Solve PYQs, and Stay Updated with Current Affairs.
          </p>

          <button
            onClick={() => nav("/categories")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Start Practicing
          </button>
        </div>
      </section>

      {/* FEATURED QUIZZES */}
      <section data-aos="fade-up" className="py-20 px-6 bg-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Featured Quizzes
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { title: "SSC PYQ Quiz", image: "ssc.webp", route: "ssc" },
            { title: "Banking PYQ Quiz", image: "banking.jfif", route: "banking" },
            { title: "Railway PYQ Quiz", image: "railway.png", route: "railway" },
            { title: "APSC PYQ Quiz", image: "apscc.webp", route: "apsc" },
            { title: "Assam Police Quiz", image: "assam police.jpg", route: "assampolice" },
            { title: "ADRE PYQ Quiz", image: "adre.webp", route: "adre" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-44 flex items-center justify-center bg-gray-50 p-6">
                <img
                  src={`${base}${item.image}`}
                  alt={item.title}
                  className="max-h-28 object-contain transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-4">
                  {item.title}
                </h3>

                <button
                  onClick={() => nav(`/pyq/${item.route}`)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition duration-300"
                >
                  Take Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENT AFFAIRS */}
      <section data-aos="fade-right" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="h-56 sm:h-64 md:h-full overflow-hidden">
              <img
                src={`${base}current.png`}
                alt="Current Affairs"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Daily Current Affairs
              </h2>

              <p className="text-gray-700 mb-6">
                Stay updated with national & international news,
                government schemes and important exam topics.
              </p>

              <button
                onClick={() => nav("/current-affairs")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-gray-300 pt-16 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              BharatQuiz
            </h2>
            <p className="text-sm">
              Your trusted platform for Government Exam Preparation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">About</li>
              <li className="hover:text-orange-400 cursor-pointer">Mock Tests</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Popular Exams</h3>
            <ul className="space-y-2 text-sm">
              <li>SSC</li>
              <li>Banking</li>
              <li>Railway</li>
              <li>APSC</li>
              <li>ADRE</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">support@bharatquiz.com</p>
          </div>

        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} BharatQuiz. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;