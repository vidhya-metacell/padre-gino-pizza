import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";
import PastOrders from "./PastOrders";
import ContactUs from "./ContactUs";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,           // optional: tune cache
      refetchOnWindowFocus: false, // optional: dev-friendly
    },
  },
});

// Home page contents only
const Home = () => (
  <>
    <div className="index">
      <div className="index-brand">
        <h1>Padre Gino's</h1>
        <p>Pizza & Art at a location near you</p>
      </div>
      <ul>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/past">Past Orders</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <PizzaOfTheDay />
  </>
);

const App = () => {
  const cartHook = useState([]); // [cart, setCart]

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cartHook}>
        <BrowserRouter>
          {/* Header visible on all pages */}
          <Header />

          <Routes>
            {/* Home: index block + PizzaOfTheDay */}
            <Route path="/" element={<Home />} />

            {/* Other pages */}
            <Route path="/order" element={<Order />} />
            <Route path="/past" element={<PastOrders />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* 404 → redirect to home (optional) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
    
  );
};

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(React.createElement(App));
