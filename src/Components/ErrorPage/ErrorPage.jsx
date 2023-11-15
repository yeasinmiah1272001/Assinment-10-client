
const ErrorPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-6xl text-red-600">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The page you are looking for doesn't exist.
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
};

export default ErrorPage;