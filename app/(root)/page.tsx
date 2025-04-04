import HomeNavigationButtons from '@/components/HomeNavigationButtons';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Ali Madian</h1>
      <h2 className="text-3xl text-gray-600 dark:text-gray-300 mb-8">
        Data Scientist & ML Engineer
      </h2>
      <p className="text-3xl text-gray-700 dark:text-gray-300 mb-8">
        Welcome to my portfolio. I specialize in machine learning and data analysis.
      </p>
      <HomeNavigationButtons />
    </div>
  );
}