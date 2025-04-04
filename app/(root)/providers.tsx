'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        // Check for saved preference or system preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            setDarkMode(savedMode === 'true');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    if (!mounted) return null;

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-white dark:bg-gray-900">
                {children}
            </div>
        </div>
    );
}