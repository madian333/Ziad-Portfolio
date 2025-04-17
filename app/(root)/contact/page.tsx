'use client';
import Navigation from '@/components/Navigation';

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <Navigation />

            <div className="flex flex-col items-center justify-center min-h-[70vh]">
                <h1 className="text-5xl font-bold mb-8 text-red-400">Get in Touch</h1>

                {/* Main card with gradient - no neon glow */}
                <div className="bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 rounded-lg shadow-xl p-6 md:p-8 w-full max-w-lg 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="space-y-6 text-gray-100">
                        <div className="group">
                            <h2 className="text-3xl font-semibold text-red-400 mb-2">Email</h2>
                            <a href="mailto:Bedoazb82@gmail.com"
                                className="text-blue-300 group-hover:text-blue-200 hover:underline text-lg flex items-center transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Bedoazb82@gmail.com
                            </a>
                        </div>

                        <div className="group">
                            <h2 className="text-3xl font-semibold text-red-400 mb-2">Phone</h2>
                            <a href="tel:+201149542343"
                                className="text-blue-300 group-hover:text-blue-200 hover:underline text-lg flex items-center transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +20 114 954 2343
                            </a>
                        </div>

                        <div className="group">
                            <h2 className="text-3xl font-semibold text-red-400 mb-2">LinkedIn</h2>
                            <a href="https://www.linkedin.com/in/bedo-azb-5b41a2227/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 group-hover:text-blue-200 hover:underline text-lg flex items-center transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                linkedin.com/in/bedo-azb-5b41a2227
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}