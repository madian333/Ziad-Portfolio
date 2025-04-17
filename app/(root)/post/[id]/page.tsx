import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abdelrahman Azb | Web Devloper",
    description: "Portfolio of Abdelrahman Azb, Web Devloper and software Engineer",
};

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            {/* Hero Section */}
            <section className="min-h-screen pt-32">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                        Web Development Solutions
                    </h1>
                    <h2 className="mt-6 text-2xl sm:text-3xl text-blue-600 dark:text-blue-400">
                        I'M Abdelrahman Azb
                    </h2>
                    <p className="mt-6 max-w-md text-lg sm:text-xl">
                        Aspiring Web Developer with expertise in Front end and Back end.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href="#projects" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                            View Projects
                        </a>
                        <a href="#about" className="rounded-lg border-2 border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50">
                            About Me
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-xl font-semibold">Summary</h3>
                        <p className="mt-2">
                            Aspiring Data Scientist with strong foundation in statistical analysis,
                            data visualization, and predictive modeling. Proficient in Python, SQL,
                            and machine learning libraries.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold">Education</h3>
                        <p className="mt-2">
                            <strong>Bachelor of Science in Computer Science</strong><br />
                            Ain Shams University, Cairo, Egypt (2022-2026)
                        </p>
                        <p className="mt-2">
                            <strong>Relevant Coursework:</strong><br />
                            Data Structures, Algorithms, Linear Algebra, Probability, Statistics,
                            Database Systems, Machine Learning, AI
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <ul className="mt-2 grid grid-cols-2 gap-2">
                            <li>• Python</li>
                            <li>• C++</li>
                            <li>• Java</li>
                            <li>• SQL</li>
                            <li>• PHP</li>
                            <li>• TensorFlow</li>
                            <li>• Scikit-learn</li>
                            <li>• Pandas</li>
                            <li>• OOP</li>
                            <li>• Data Structures</li>
                            <li>• Algorithms</li>
                            <li>• Machine Learning</li>
                        </ul>

                        <h3 className="mt-6 text-xl font-semibold">Languages</h3>
                        <p className="mt-2">Arabic (Native), English (B2)</p>
                    </div>
                </div>
            </section>

            {/* Projects Section - Updated with all projects from CV */}
            <section id="projects" className="py-20">
                <h2 className="text-3xl font-bold">Projects</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {[
                        {
                            title: "Fraud Detection AI",
                            description: "Built an AI-driven fraud detection model to identify suspicious transactions in financial datasets using Python and Scikit-learn.",
                            tools: ["Python", "Scikit-learn", "Pandas"],
                        },
                        {
                            title: "Water Quality Prediction",
                            description: "Created a predictive model to assess water quality using deep learning with TensorFlow and NumPy.",
                            tools: ["Python", "TensorFlow", "NumPy"],
                        },
                        {
                            title: "Loan Protection AI",
                            description: "Designed a machine learning system to evaluate loan repayment risks using XGBoost and SQL.",
                            tools: ["Python", "XGBoost", "SQL", "Matplotlib"],
                        },
                        {
                            title: "Digital Wallet System",
                            description: "Developed a digital wallet system implementing core functionalities like account balance tracking and transaction processing.",
                            tools: ["C++", "SFML", "Data Structures"],
                        },
                        {
                            title: "GYM Management System",
                            description: "Java application with JavaFX GUI for gym management, implementing OOP principles.",
                            tools: ["Java", "OOP", "JavaFX"],
                        },
                    ].map((project, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="rounded bg-blue-100 px-2 py-1 text-sm dark:bg-blue-900 dark:text-blue-200">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}