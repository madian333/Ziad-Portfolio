import { Metadata } from "next";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "About | Ali Madian",
    description: "About Ali Madian - Data Scientist and ML Engineer",
};

export default function About() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <Navigation />
            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">About Me</h1>
                <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </header>

            {/* Professional Summary */}
            <section className="mb-8 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Professional Summary</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Aspiring Data Scientist with extensive expertise in statistical analysis,
                    machine learning, and predictive modeling. Proficient in Python, SQL,
                    and modern ML frameworks with hands-on experience in developing AI solutions
                    for real-world problems. Strong foundation in algorithms and data structures
                    with a passion for transforming complex data into actionable insights.
                </p>
            </section>

            {/* Certifications */}
            <section className="mb-8 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Certifications</h2>
                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">Machine Learning Specialization</h3>
                    <p className="text-gray-600 dark:text-gray-300">Stanford University | Coursera | 2025</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Completed 3-course specialization covering:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Supervised Learning (Regression, Classification)</li>
                        <li>Advanced Learning Algorithms</li>
                        <li>Unsupervised Learning & Recommender Systems</li>
                    </ul>
                    <a
                        href="https://coursera.org/verify/specialization/OFR4H8Y8CFXO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Verify Certificate
                    </a>
                </div>
            </section>

            {/* Education */}
            <section className="mb-8 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h2>
                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">Ain Shams University, Cairo, Egypt (2022-2026)</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            "Data Structures", "Algorithms", "Linear Algebra",
                            "Probability", "Statistics", "Database Systems",
                            "Machine Learning", "AI"
                        ].map((course, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        "Python", "C++", "Java", "SQL", "PHP",
                        "TensorFlow", "Scikit-learn", "Pandas",
                        "OOP", "Data Structures", "Algorithms",
                        "Machine Learning"
                    ].map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}