function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 py-16 px-6">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About QuizMaster
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          QuizMaster is a modern online quiz platform designed to help students 
          practice and improve their competitive exam preparation skills.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our goal is to provide structured subject-wise and series-wise quizzes 
          with real exam-like experience including timer, scoring, and progress tracking.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you are preparing for government exams or improving your knowledge, 
          QuizMaster aims to make learning simple, interactive, and effective.
        </p>

      </div>

    </div>
  );
}

export default About;
