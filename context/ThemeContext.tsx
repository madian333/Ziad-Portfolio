'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            setDarkMode(savedMode === 'true');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', String(newMode));
    };

    if (!mounted) {
        return <div className={darkMode ? 'dark' : ''}>{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? 'dark' : ''}>{children}</div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};