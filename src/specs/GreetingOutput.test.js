import React from "react";
import GreetingOutput from "../GreetingOutput";
import { render, screen } from "@testing-library/react";

describe("GreetingOutput.jsx", () => {
  beforeEach(() => {
    render(<GreetingOutput planet="TestPlanet" />);
  });

  it("is expected to display a greeting that contains planet name", () => {
    expect(
      screen.getByText("Hello TestPlanet from a functional component", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  it("it can be accessed by id", () => {
    expect(screen.getByTestId("greeting")).toHaveTextContent(
      "Hello TestPlanet from a functional component",
      { exact: false }
    );
  });
});
