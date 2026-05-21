"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleGetStarted = () => {
    setIsNavigating(true);
    router.push("/dashboard");
  };

  const handleSkip = () => {
    setIsNavigating(true);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center max-w-md w-full px-6">
        {/* App Logo Placeholder */}
        <div
          className="mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 shadow-lg"
          aria-hidden="true"
        >
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            data-testid="welcome-heading"
          >
            Welcome to Test-App-7
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            data-testid="welcome-subtext"
          >
            Your all-in-one solution for managing project tasks and requirements efficiently.
          </p>
        </div>

        {/* Action Section */}
        <div className="flex flex-col gap-4 w-full" data-testid="welcome-actions">
          <button
            onClick={handleGetStarted}
            disabled={isNavigating}
            className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
            data-testid="welcome-get-started-btn"
          >
            {isNavigating ? "Loading..." : "Get Started"}
          </button>
          
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Or
            </span>
            <button
              onClick={handleSkip}
              disabled={isNavigating}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
              data-testid="welcome-skip-link"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
