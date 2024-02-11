"use client";

import { Moon, Sun } from "lucide-react";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { Button } from "@/components/ui/button";

export const ThemeSwitch = () => {
  const { isDarkTheme, onThemeChange, mounted } = useThemeSwitch();

  if (!mounted) return null;

  return (
    <div className="absolute top-8 right-8 animate-fade-in">
      <Button onClick={() => onThemeChange(!isDarkTheme)} size="icon" variant="outline">
        {isDarkTheme ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
