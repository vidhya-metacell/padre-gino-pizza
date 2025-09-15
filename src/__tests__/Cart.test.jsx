import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";


test("test cart is loaded empty snapshot", () => {
  const { asFragment } = render(() => <Cart cart={[]} />);
  expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`);
})