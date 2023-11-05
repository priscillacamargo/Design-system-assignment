# React + TypeScript + Vite + Tailwind Design System

## Running The Project

After cloning please run the command below in the project's root folder to install dependencies

```npm run install```

Then run the following command to run the development server:

```npm run dev```

Server will start at:

```http://localhost:5173/```

For testing components run:

```npm run test```

For starting storybook please run:

```npm run storybook```

## Dependencies and Tech Chosen

- Taiwind as CSS framework
- Vite for bundling
- Typescript for type checking
- Testing Library and Jest for testing
- Storybook for building isolated components

## Assumptions

- I didn't focus on fine tunning deployments
- Created composable components using atom design principles
- The isolated components still use variables from the theme (assuming that the Design System is opinionated)
- Just created a small test example didn't focus in extensive test implementation

## From Vite Readme

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
