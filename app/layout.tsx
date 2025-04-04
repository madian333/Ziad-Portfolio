import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-white dark:bg-gray-900">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}