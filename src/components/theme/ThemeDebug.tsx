"use client";

import { useTheme } from './ThemeProvider';

export default function ThemeDebug() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border">
      <h3 className="text-sm font-bold mb-2">Theme Debug</h3>
      <p className="text-xs mb-2">Current theme: <span className="font-mono">{theme}</span></p>
      <button 
        onClick={toggleTheme}
        className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
} 