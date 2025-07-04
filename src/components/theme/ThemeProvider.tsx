"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // التحقق من الثيم المحفوظ في localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme);
    } else {
      // التحقق من تفضيل النظام
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setThemeState(systemTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // تطبيق الثيم على document
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      
      // حفظ الثيم في localStorage
      localStorage.setItem('theme', theme);
      
      console.log('Theme applied:', theme); // للتأكد من أن الثيم يتم تطبيقه
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current theme:', theme); // للتأكد من أن الدالة تعمل
    setThemeState(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Switching from', prev, 'to', newTheme);
      return newTheme;
    });
  };

  const setTheme = (newTheme: Theme) => {
    console.log('Set theme called:', newTheme);
    setThemeState(newTheme);
  };

  // تجنب hydration mismatch
  if (!mounted) {
    return <div className="light">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // إرجاع قيم افتراضية بدلاً من رمي خطأ
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {
        console.log('ThemeProvider not available');
      },
      setTheme: () => {
        console.log('ThemeProvider not available');
      },
    };
  }
  return context;
} 