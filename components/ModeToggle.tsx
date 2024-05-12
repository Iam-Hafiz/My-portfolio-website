"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ModeToggle() {
    const { theme , setTheme } = useTheme();
    function handleClick() {
        theme === "light" ? setTheme("dark"): setTheme("light");
    }
  return (
    <motion.div
      className=" fixed top-1 z-50 flex justify-center items-center dark:hover:bg-opacity-90"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleClick}
        className="rounded-full relative bg-opacity-50 hover:rotate-12 rota dark:text-white h-[2.25rem] w-[2.25rem] dark:bg-opacity-50 shadow-2xl transition-all"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
