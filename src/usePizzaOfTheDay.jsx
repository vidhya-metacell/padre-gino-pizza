import { useEffect, useState } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
  async function fetchPizzaOfTheDay() { 
    const pizzasRes = await fetch("/api/pizza-of-the-day");
    const pizzasJson = await pizzasRes.json();
    setPizzaOfTheDay(pizzasJson);
  }

  fetchPizzaOfTheDay();

  }, []);

  return pizzaOfTheDay;
}