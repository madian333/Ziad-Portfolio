import { Metadata } from "next";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "Projects | Ziad Hassan",
    description: "My Software Development Projects",
};

export default function Projects() {
    const projects = [
        {
            title: "Simple Digital Wallet System",
            description: "A secure and efficient digital wallet application developed in C++, enabling users to manage transactions, check balances, and transfer funds with a focus on performance and reliability.",
            tools: ["C++"]
        },
        {
            title: "Padel and Gym Management System",
            description: "A comprehensive management system for padel courts and gym facilities, built in C++, featuring booking management, member tracking, and payment processing for streamlined operations.",
            tools: ["C++"]
        },
        {
            title: "Super Mario Game",
            description: "A 2D platformer game inspired by Super Mario, developed using C# and SFML, with smooth controls, engaging levels, and retro-style graphics for an immersive gaming experience.",
            tools: ["C#", "SFML"]
        },
        {
            title: "Metro Management System",
            description: "A Java-based application for managing metro operations, including train scheduling, ticketing, and station management, designed for scalability and ease of use.",
            tools: ["Java"]
        },
        {
            title: "Railway System Database",
            description: "A robust SQL database system for railway operations, supporting train schedules, passenger records, and ticketing, optimized for efficient data retrieval and management.",
            tools: ["SQL"]
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