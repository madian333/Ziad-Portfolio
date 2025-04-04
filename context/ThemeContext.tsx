"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Only access client-side APIs on the client
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode !== null) {
                setDarkMode(savedMode === 'true');
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setDarkMode(true);
            }
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', newMode);
            localStorage.setItem('darkMode', String(newMode));
        }
    };

    // During the initial render (on the server or before mounting), provide a default context
    if (!mounted) {
        return (
            <ThemeContext.Provider value={{ darkMode: false, toggleDarkMode: () => { } }}>
                {children}
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}