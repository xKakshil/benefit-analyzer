const ErrorBanner = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 rounded-2xl p-4 mt-6">
      {message}
    </div>
  );
};

export default ErrorBanner;