const apiUrl = import.meta.env.VITE_API_URL;

export default async function gePastOrders(order) {
  const response = await fetch(`${apiUrl}/api/past-order/${order}`);
  const data = await response.json();
  return data;
}