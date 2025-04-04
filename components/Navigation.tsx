'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Navigation() {
    const { darkMode, toggleDarkMode } = useTheme();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { path: '/about', name: 'About Me' },
        { path: '/projects', name: 'My Projects' },
        { path: '/contact', name: 'Contact' }
    ];

    return (
        <>
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-16 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm"
            >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>

            {/* Hamburger Menu */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 flex flex-col space-y-1.5 p-2"
                aria-label="Menu"
            >
                <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Navigation Panel */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-white to-violet-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-violet-900 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>                <div className="flex flex-col space-y-4 p-6 mt-16">
                {routes.map((route) => (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={`px-4 py-3 rounded-lg transition-colors ${pathname === route.path
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
            </div>
        </>
    );
}