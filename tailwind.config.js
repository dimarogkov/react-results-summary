/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                gradientPurple: 'hsl(252, 100%, 67%)',
                gradientBlue: 'hsl(241, 81%, 54%)',
                darkGray: 'hsl(224, 30%, 27%)',
                white: 'hsl(0, 0%, 100%)',
            },
        },
    },
    plugins: [require('daisyui')],
};
