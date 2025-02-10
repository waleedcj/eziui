# React Native Animated Components Code Snippets

![Animated Components](./assets/animated-components.png)

This project is a website that showcases a collection of animated components designed for React Native. Each snippet is ready to be copied and pasted into your own projects—helping you quickly implement engaging animations using React Native’s built-in Animated API without requiring any external UI libraries.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Important Note](#important-note)
- [Testing](#testing)
- [Deploying](#deploying)
- [Installed Packages](#installed-packages)

## Overview

This website serves as a live repository of code examples for React Native animated components. While the site itself is built with modern web technologies (Vite + React), every code snippet showcased is intended for React Native projects. Whether you’re looking to add slide-ins, fade effects, or complex gesture-based animations, you’ll find practical examples that you can copy and paste directly into your app code.

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (or your preferred package manager)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-native-animated-components
   ```

3. **(Optional) Remove version control if needed:**

   ```bash
   rm -rf .git
   ```

4. **Install dependencies:**

   ```bash
   pnpm install
   ```

5. **Run the development server:**

   ```bash
   pnpm run dev
   ```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to explore the animated component demos and copy the provided code snippets.

## Important Note

1. **Purpose**: This website is designed solely as a reference for React Native animated component code. It is not an Expo or full mobile app project. Instead, it provides ready-to-use code snippets that can be integrated into your own React Native projects.
2. **Usage**: While the website is built with Vite and React for fast, modern web development, the code examples are specifically tailored for React Native’s Animated API.
3. **Educational Intent**: The demos and examples are for learning and experimentation. They’re structured to help you understand how to create smooth animations in React Native without relying on external UI libraries.

## Testing

Testing is implemented using React Testing Library and Vitest for unit tests, with Playwright handling End-to-End (E2E) testing to ensure a seamless user experience on the website.

- **Run all tests:**

  ```bash
  pnpm run test
  ```

- **Run unit tests only:**

  ```bash
  pnpm run test:unit
  ```

- **Run tests with coverage reports:**

  ```bash
  pnpm run test:unit:coverage
  ```

## Deploying

### Without Docker

Build the production-ready version of the website with:

```bash
pnpm run build
```

Then, host the generated static files from the `dist/` directory on any static file server.

### With Docker

If you prefer containerization, a Dockerfile is provided:

1. **Build the website:**

   ```bash
   pnpm run build
   ```

2. **Build the Docker image:**

   ```bash
   docker build . -t <container_name>
   ```

   *Example:*

   ```bash
   docker build . -t animated-components-site
   ```

3. **Run the Docker container:**

   ```bash
   docker run -p <port_number>:80 <container_name>
   ```

   *Example:*

   ```bash
   docker run -p 8080:80 animated-components-site
   ```

## Installed Packages

Key packages used in this project:

- **Core Framework:**
  - [Vite](https://vitejs.dev) – Fast development and build tooling
  - [React](https://react.dev) – Modern front-end JavaScript library
  - [TypeScript](https://www.typescriptlang.org) – Strongly typed JavaScript (if applicable)

- **Testing:**
  - [Vitest](https://vitest.dev)
  - [React Testing Library](https://testing-library.com)
  - [Playwright](https://playwright.dev)

- **Linting & Formatting:**
  - [ESLint](https://eslint.org)
  - [Prettier](https://prettier.io)

- **Additional Tools:**
  - Utilities for code syntax highlighting and UI rendering to neatly display code snippets on the website.

---

Happy coding! Enjoy exploring these React Native animated components and feel free to copy and paste the snippets into your projects.