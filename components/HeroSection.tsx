export default function HeroSection() {
    return (
      <section className="min-h-screen pt-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Creating Digital Marvels
          </h1>
          <h2 className="mt-6 text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">
            I'M ALI MADIAN
          </h2>
          <p className="mt-6 max-w-md text-lg sm:text-xl">
            A passionate Data Scientist with expertise in machine learning and data analysis.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-lg bg-blue-600 px-4 py-2 text-white">
              View Projects
            </a>
            <a href="#about" className="rounded-lg border-2 border-blue-600 px-4 py-2 text-blue-600">
              About Me
            </a>
          </div>
        </div>
      </section>
    );
  }