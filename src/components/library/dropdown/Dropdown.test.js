import { getByTestId, render } from "@testing-library/react";
import React from "react";

import Dropdown from "./Dropdown";

let container = null;

beforeEach(() => {
  container = render(<Dropdown />).container;
});

it("should show the Nav", () => {
  expect(getByTestId(container, "dropdownButton")).toBeTruthy();
});

it("should show menu", () => {
  expect(getByTestId(container, "dropdownItem")).toBeGreaterThan(2);
});
