import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { expect, test, afterEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

afterEach(cleanup);

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};

test('test the pizza is null first time', async() => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const pizzaOfTheDay = renderHook(() => usePizzaOfTheDay())
  expect(pizzaOfTheDay.result.current).toBe(null);
})

test('test the pizza is test pizza', async() => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const pizzaOfTheDay = renderHook(() => usePizzaOfTheDay())
  await waitFor(() => {
    expect(pizzaOfTheDay.result.current).toEqual(testPizza);
  })
  expect(fetchMock).toBeCalledWith('/api/pizza-of-the-day')
})