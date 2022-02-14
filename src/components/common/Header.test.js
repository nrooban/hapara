import { getByTestId, render } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import { createMemoryHistory } from "history";

let container = null;

beforeEach(() => {
  container = render(<Header />).container;
});

it("should show the Nav", () => {
  expect(getByTestId(container, "logo")).toBeTruthy();
});

// it("should show menu", () => {
//   expect(getByTestId(container, "logo")).toBeTruthy();
// });
