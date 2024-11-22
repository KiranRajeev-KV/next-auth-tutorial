import React from 'react';
import Link from 'next/link';

const Denied = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          You do not have permission to view this page.
        </p>
        <Link href="/" passHref>
          <button 
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200"
          >
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Denied;
