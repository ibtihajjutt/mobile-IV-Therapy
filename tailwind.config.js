/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: "#1E1B4B",   // Deep Indigo/Purple (replaces navy)
                    purple: "#8B5CF6", // Light Purple (replaces teal)
                    white: "#FFFFFF",
                },
                secondary: {
                    gray: "#F5F7FA",
                    gold: "#D4AF37",
                    red: "#E63946",
                },
                brand: {
                    hover: "#7C3AED", // Violet-600 for hover states
                }
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [],
}
