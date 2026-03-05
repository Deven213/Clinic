/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-teal': '#0a9e8f',
                'cream': '#f9f5f0',
                'dark': '#0d1b1e',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['"DM Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
