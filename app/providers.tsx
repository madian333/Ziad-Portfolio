'use client';
import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900">{children}</div>;
  }

  return <div className="min-h-screen bg-white dark:bg-gray-900">{children}</div>;
}