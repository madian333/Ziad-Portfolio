import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import HomeNavigationButtons from '@/components/HomeNavigationButtons';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-main-light-bg dark:bg-main-dark-bg">
                <ThemeProvider>
                    {children}
                    {/* This will now only render on home page */}
                    <HomeNavigationButtons />
                </ThemeProvider>
            </body>
        </html>
    );
}


