import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  // The real theme is applied by the inline script in index.html before paint,
  // so read back from the DOM instead of guessing and causing a flash.
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDarkMode}
      className="p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-secondary transition-colors duration-300"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};
