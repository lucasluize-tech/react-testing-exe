import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("should render the Carousel", () => {
  render(<Carousel />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

test("if the backArrow is functioning properly", () => {
  const { getByTestId, getByAltText } = render(<Carousel />);
  const rightArrow = getByTestId("right-arrow");
  fireEvent.click(rightArrow);
  expect(getByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  const leftArrow = getByTestId("left-arrow");
  fireEvent.click(leftArrow);
  expect(
    getByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
});

test("if first image in carousel does not have left-arrow", () => {
  const { getByTestId, getByAltText } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  // debugger to find properties to leftArrow
  expect(leftArrow.className).toEqual("");
});
test("if last image in carousel does not have right-arrow", () => {
  const { getByTestId } = render(<Carousel />);
  fireEvent.click(getByTestId("right-arrow"));
  fireEvent.click(getByTestId("right-arrow"));
  const rightArrow = getByTestId("right-arrow");

  expect(rightArrow.className).toEqual("");
});
