import { Metadata } from "next";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "Projects | Abdelrahman Azb",
    description: "My Web Development Projects",
};

export default function Projects() {
    const projects = [
        {
            title: "Fast and Furious Series Website",
            description: "A dynamic website showcasing the Fast and Furious movie series, featuring movie details, trailers, and fan content with a sleek, responsive design.",
            tools: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Gaming Platform with Login",
            description: "A gaming website with a secure login system, offering a collection of browser-based games and user profiles for tracking scores and achievements.",
            tools: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
        },
        {
            title: "Hospital Management System",
            description: "A comprehensive web application for hospital management, including patient records, appointment scheduling, and staff coordination, built with a focus on usability.",
            tools: ["HTML", "CSS", "JavaScript", "Python", "Django", "PostgreSQL"]
        },
        {
            title: "Mario-Style Platformer Game",
            description: "A browser-based platformer game inspired by Super Mario, featuring smooth controls, vibrant graphics, and challenging levels.",
            tools: ["HTML", "CSS", "JavaScript", "Phaser"]
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-8">
            <Navigation />
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">My Projects</h1>

            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border p-6 rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.map((tool, i) => (
                                <span key={i} className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}