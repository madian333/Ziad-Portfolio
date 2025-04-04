import HomeNavigationButtons from '@/components/HomeNavigationButtons';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Main content container with increased spacing */}
      <div className="mt-32 space-y-12"> {/* Increased from mt-16 and space-y-8 */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Ali Madian
        </h1>

        <h2 className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300">
          Data Scientist & ML Engineer
        </h2>

        <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to my portfolio. I specialize in machine learning and data analysis.
        </p>
      </div>

      {/* Buttons with increased top margin */}
      <div className="mt-12"> {/* Added wrapper with top margin */}
        <HomeNavigationButtons />
      </div>
    </div>
  );
}