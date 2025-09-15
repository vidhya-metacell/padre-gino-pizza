import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
  async function fetchPizzaOfTheDay() { 
    const pizzasRes = await fetch(`${apiUrl}/api/pizza-of-the-day`);
    const pizzasJson = await pizzasRes.json();
    setPizzaOfTheDay(pizzasJson);
  }

  fetchPizzaOfTheDay();

  }, []);

  return pizzaOfTheDay;
}