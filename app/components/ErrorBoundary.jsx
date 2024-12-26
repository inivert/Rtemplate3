import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 p-4 rounded-lg text-left">
            <p className="text-red-700 font-medium mb-2">Error details:</p>
            <pre className="text-sm text-red-600 whitespace-pre-wrap break-words">
              {error.message || 'Unknown error occurred'}
            </pre>
          </div>
        )}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Page
          </button>
          <a
            href="/"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary; 