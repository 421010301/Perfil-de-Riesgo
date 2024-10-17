"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'react-feather';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState<"light" | "dark">();

    useEffect(() => {
        // Get the theme from localStorage, default to 'light' if none exists
        const theme = localStorage.getItem("theme") || "light";

        // Apply the theme to the document
        document.documentElement.setAttribute("data-bs-theme", theme);
        setDarkMode(theme as "light" | "dark");
    }, []);

    const toggleTheme = () => {
        // Toggle between light and dark modes
        const newTheme = darkMode === "dark" ? "light" : "dark";

        // Update state and save the new theme in localStorage
        setDarkMode(newTheme);
        localStorage.setItem("theme", newTheme);

        // Apply the new theme to the document
        document.documentElement.setAttribute("data-bs-theme", newTheme);
    };

    return (
        <button
            className="btn btn-primary p-0 p-2 position-fixed rounded-circle"
            onClick={toggleTheme}
            style={{
                right: '1rem',
                bottom: '1rem',
                zIndex: 1000,
            }}
        >
            {darkMode === "dark" ? <Sun /> : <Moon />}
        </button>
    );
}
