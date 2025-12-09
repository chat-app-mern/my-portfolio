/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './src/wrappers/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '360px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: '#FF3C3C',
                black: '#121212',
                lightBlack: '#1B1B1B',
                lightGrey: '#C6C6C6',
                grey: '#959595',
                darkGrey: '#707070',
                white: '#fff',
            },
            borderRadius: {
                'xl-custom': '45px',
            },
            keyframes: {
                slideIn: {
                    '0%': { right: '-100%', opacity: '0' },
                    '100%': { right: '0', opacity: '1' },
                },
                slideOut: {
                    '0%': { right: '0', opacity: '1' },
                    '100%': { right: '-100%', opacity: '0' },
                },
            },
            animation: {
                slideIn: 'slideIn 0.6s ease-in-out forwards',
                slideOut: 'slideOut 0.6s ease-in-out forwards',
            },
        },
    },
    plugins: [],
};
