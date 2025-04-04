import { ThemeProvider } from '@/context/ThemeContext';
import Navigation from '@/components/Navigation';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-gradient-to-br from-white to-violet-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-violet-800">
                <ThemeProvider>
                    <Navigation />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}