import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Abdelrahman Azb",
    description: "About Abdelrahman Azb - Web Developer",
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
                    Passionate Web Developer with expertise in building dynamic, responsive, and user-friendly web applications. Proficient in modern web technologies like React, Node.js, and Django, with a strong foundation in HTML, CSS, and JavaScript. Dedicated to creating seamless digital experiences and solving real-world problems through clean, efficient code.
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
                            "Web Development", "Data Structures", "Algorithms",
                            "Database Systems", "Software Engineering", "User Interface Design",
                            "Web Security", "Cloud Computing"
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
                        "HTML", "CSS", "JavaScript", "React", "Node.js",
                        "Django", "MongoDB", "PostgreSQL", "TypeScript",
                        "OOP", "Responsive Design", "APIs"
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