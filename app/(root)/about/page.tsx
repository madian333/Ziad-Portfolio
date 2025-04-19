import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Ziad Hassan",
    description: "About Ziad Hassan - Software Developer",
};

export default function About() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">About Me</h1>
                <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            </header>

            {/* Professional Summary */}
            <section className="mb-8 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Summary</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Dedicated Software Developer with a strong background in designing and implementing robust, scalable software solutions. Skilled in full-stack development, system architecture, and cloud technologies, with expertise in languages like Python, Java, and JavaScript. Committed to delivering high-quality code and innovative solutions to complex technical challenges.
                </p>
            </section>

            {/* Education */}
            <section className="mb-8 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h2>
                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">Modern Academy University, Cairo, Egypt (2022-2026)</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            "Software Engineering", "Data Structures", "Algorithms",
                            "Operating Systems", "Distributed Systems", "Machine Learning",
                            "Cloud Computing", "Cybersecurity"
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
                        "Python", "Java", "JavaScript", "React", "Node.js",
                        "Django", "PostgreSQL", "MongoDB", "AWS",
                        "Docker", "System Design", "Microservices"
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