"use client"
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'react-feather';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Cambiar el tema en el elemento <html>
        if (darkMode) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <button className="btn btn-primary p-0 p-2 position-fixed rounded-circle" onClick={toggleTheme} style={{
            right: '1rem',
            bottom: '1rem',
            zIndex: 1000,
        }}>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    );
}
