'use client';
import Link from 'next/link';

export default function HomeNavigationButtons() {
    const buttons = [
        { path: '/about', name: 'About Me' },
        { path: '/projects', name: 'Projects' },
        { path: '/contact', name: 'Contact' }
    ];

    return (
        <div className="max-w-3xl mx-auto px-4"> {/* Match container width */}
            <div className="flex flex-wrap gap-4 mb-12">
                {buttons.map((button) => (
                    <Link
                        key={button.path}
                        href={button.path}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md 
                                  transition-all duration-300 transform hover:scale-105"
                    >
                        {button.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}