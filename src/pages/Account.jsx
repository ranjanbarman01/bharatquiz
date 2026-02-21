function Account() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          My Account
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-2 text-gray-600">
            <p><strong>Name:</strong> Ranjan Barman</p>
            <p><strong>Email:</strong> ranjan@email.com</p>
            <p><strong>Joined:</strong> January 2026</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Attempts
            </h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">
              12
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Average Score
            </h3>
            <p className="text-2xl font-bold text-green-600 mt-2">
              68%
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Best Score
            </h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              90%
            </p>
          </div>

        </div>

        {/* Recent Attempts */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Recent Attempts
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-2">
              <span>Math - Series 1</span>
              <span className="font-semibold text-indigo-600">8 / 10</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Reasoning - Series 2</span>
              <span className="font-semibold text-indigo-600">7 / 10</span>
            </div>

            <div className="flex justify-between">
              <span>History - Series 1</span>
              <span className="font-semibold text-indigo-600">9 / 10</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Account;
