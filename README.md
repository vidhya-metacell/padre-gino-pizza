# 🍕 Padre Gino's Pizza

This application simulates a pizza ordering experience, covering React fundamentals, hooks, routing, data fetching, testing, and React Query.

---

## 📚 What You’ll Learn

This repo demonstrates many modern React concepts, including:

- Functional components and JSX
- Props & state management with hooks
- React Router for client-side navigation
- Forms and controlled components
- Async data fetching (custom hooks + React Query)
- Unit and integration tests with Vitest & Testing Library
- Build tools: Vite + ESLint + Prettier
- Component composition and reusable UI patterns

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/vidhya-metacell/padre-gino-pizza.git
cd padre-gino-pizza
```

### 2. Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### 3. Run the dev server

```bash
npm run dev
```

This will start Vite’s dev server.  
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Running Tests

```bash
npm test
```

We use:

- [Vitest](https://vitest.dev/) for test running
- [@testing-library/react](https://testing-library.com/) for component tests
- [vitest-fetch-mock](https://www.npmjs.com/package/vitest-fetch-mock) for mocking API calls

---

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be output to `/dist`.

---

## 📂 Project Structure

```
src/
  components/        # UI components (buttons, forms, etc.)
  pages/             # Route pages (Home, Contact, Menu)
  hooks/             # Custom hooks (usePizzaOfTheDay, etc.)
  api/               # API helpers / mock services
  __tests__/         # Unit and integration tests
```

---

## 🎓 Credits

The pizza theme is for practice purposes only — not a real ordering system.

---

## 📜 License

MIT — free to use and adapt for learning.
