import { Moon, Sun } from "lucide-react";
import { useTheme } from "../Embed/ThemeContext"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-zinc-800"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}