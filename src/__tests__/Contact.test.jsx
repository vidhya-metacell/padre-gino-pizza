import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import ContactUs from "../ContactUs";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

afterEach(cleanup);

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

function renderWithProviders() {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/contact"]}>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

test("test user can submit the contact form", async() =>  {

  const screen = renderWithProviders();
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));

  const btn = screen.getByRole("button");
  expect(btn.innerText).toContain("Contact");

  const testData = {
    name: "Brian",
    email: "test@example.com",
    message: "This is a test message",
  };

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;

  btn.click();
  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.innerText).toContain("Submitted");
})

test("test user sees error heading when request failed", async() =>  {

  fetchMocker.mockResponse(
    JSON.stringify({ status: "error" }),
    { status: 400 }
  );

  const screen = renderWithProviders();

  const btn = screen.getByRole("button");
  expect(btn.innerText).toContain("Contact");

  const testData = {
    name: "Brian",
    email: "test@example.com",
    message: "This is a test message",
  };

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;

  btn.click();
  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.innerText).toContain("Not good");
})
