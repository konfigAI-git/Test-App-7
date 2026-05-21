import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-testid="dashboard-heading">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6" data-testid="dashboard-subtext">
            This is your main dashboard. From here, you can manage your tasks and requirements.
          </p>
          <div className="flex gap-4">
            <Link
              href="/welcome"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
              data-testid="dashboard-back-link"
            >
              Back to Welcome
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
