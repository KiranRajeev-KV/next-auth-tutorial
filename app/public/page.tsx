const Public = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-black mb-4">
          Welcome to the Public Page!
        </h1>
        <p className="text-xl font-medium text-gray-700">
          This page is accessible to anyone without any authentication.
        </p>
      </div>
    </div>
  );
};

export default Public;
