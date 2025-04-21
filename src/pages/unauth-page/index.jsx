const AccessDenied = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
        <p className="mt-4 text-gray-600">
          You do not have access to this page. Please contact your administrator
          or log in with the correct credentials.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
