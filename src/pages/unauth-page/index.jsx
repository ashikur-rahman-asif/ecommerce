
const AccessDenied = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          You do not have access to this page. Please contact your administrator
          or log in with the correct credentials.
        </p>
        <div className="mt-6">
          <button
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => (window.location.href = "/auth/login")}>
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
