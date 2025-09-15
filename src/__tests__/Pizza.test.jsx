import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test for Pizza images" , async() => {
  const name = "My Fav Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza image={src} name={name} description={'abc'} />
  )

  const img = screen.getByRole("img");

  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
} )

test("src to be deafult if src is not present for Pizza images" , async() => {
  const name = "My Fav Pizza";
  const screen = render(
    <Pizza name={name} description={'abc'} />
  )

  const img = screen.getByRole("img");

  expect(img.src).not.toBe("")

} )


