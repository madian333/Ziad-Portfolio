import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <main className="mt-20">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ali Madian</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Data Scientist & ML Engineer
          </h2>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to my portfolio. I specialize in machine learning and data analysis.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}