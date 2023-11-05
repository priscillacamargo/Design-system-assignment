/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography';
import { createThemes } from 'tw-colors';

export default {
    content: ['./src/**/*!(*.stories|*.spec).{ts,tsx,mdx,html}'],
    mode: 'jit',
    safelist: [
        {
            pattern: /bg-(primary|secondary)/,
        },
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        spacing: {
            1: '8px', //xs
            2: '12px', //sm
            3: '16px', //md
            4: '24px', //lg
            5: '32px', //xl
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontSize: {
            sm: '14px',
            md: '18px',
            lg: '24px',
        },

        extend: {},
    },
    plugins: [
        createThemes({
            light: {
                background: '#F5F5DC', //Beige
                text: '#2E2E2E', //Dark Slate Gray
                primary: '#008080', //Teal
                secondary: '#C0C0C0', //Silver
                error: '#B76E79', //Pale Chestnut
            },
            dark: {
                background: '#1E1E1E', //Deep Slate
                text: '#C0C0C0', //Silver Grey
                primary: '#536DFE', //Blueberry
                secondary: '#8BC34A', //Pale Green
                error: '#FF6659', //Orange Red
            },
        }),
        tailwindTypography,
    ],
};
