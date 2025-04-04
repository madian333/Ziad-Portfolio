'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HomeNavigationButtons() {
    const pathname = usePathname();
    
    // Only show on home page
    if (pathname !== '/') return null;

    const buttons = [
        { path: '/about', name: 'About Me' },
        { path: '/projects', name: 'Projects' },
        { path: '/contact', name: 'Contact' }
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 mt-8 mb-12">
            <div className="flex flex-wrap gap-4">
                {buttons.map((button) => (
                    <Link
                        key={button.path}
                        href={button.path}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                    >
                        {button.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}