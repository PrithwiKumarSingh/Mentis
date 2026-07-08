import { Moon, Sun } from "lucide-react";
import { useTheme } from "../Embed/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-2xl p-4 bg-gray-600  text-zinc-100 cursor-pointer"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}