
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isBlackWhite, setIsBlackWhite] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isBlackWhite;
    setIsBlackWhite(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('black-white-theme');
    } else {
      document.documentElement.classList.remove('black-white-theme');
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
    >
      {isBlackWhite ? (
        <>
          <Palette className="h-4 w-4 mr-2" />
          Color Mode
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 mr-2" />
          B&W Mode
        </>
      )}
    </Button>
  );
};
