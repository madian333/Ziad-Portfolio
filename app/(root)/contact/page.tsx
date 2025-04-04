'use client'; // Must be at the very top
import Navigation from '@/components/Navigation';
import { useTheme } from '@/context/ThemeContext';

export default function Contact() {
    const { darkMode } = useTheme(); // Now safely used within client component
    return (
        <div className="max-w-3xl mx-auto py-8">
            <Navigation />
            <h1 className="text-5xl font-bold mb-8 text-red-400">Contact Me</h1>

            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-semibold text-red-400">Email</h2>
                    <a href="mailto:ali.madian.000@gmail.com" className="text-blue-600 hover:underline text-lg">
                        ali.madian.000@gmail.com
                    </a>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-red-400">Phone</h2>
                    <a href="tel:+201158877316" className="text-blue-600 hover:underline text-lg">
                        +201158877316
                    </a>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-red-400">LinkedIn</h2>
                    <a
                        href="https://www.linkedin.com/in/ali-madian-858933272"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-lg"
                    >
                        linkedin.com/in/ali-madian-858933272
                    </a>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-red-400">GitHub</h2>
                    <a
                        href="https://github.com/madian333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-lg"
                    >
                        github.com/madian333
                    </a>
                </div>
            </div>
        </div>
    );
}
