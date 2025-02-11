import { createContext, useState, useEffect } from "react";
import { ThemeContextInterface } from "./ThemContext.types";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkTheme((curr) => !curr);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkTheme(true);
      }
    } else {
      setDarkTheme(currentTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};