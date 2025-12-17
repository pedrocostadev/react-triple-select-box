import { render, fireEvent, cleanup } from "@testing-library/react";
import { vi } from "vitest";

import SelectBox from "./";

describe("<SelectBox />", () => {
  afterEach(cleanup);

  it("should render the options", () => {
    const props = {
      options: [{ value: "1" }, { value: "2" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");

    expect(select.children).toHaveLength(props.options.length);
    expect(
      Array.from(select.children).every((child) =>
        props.options.map(({ value }) => value).includes(child.value)
      )
    ).toBeTruthy();
  });

  it("should render the number of lines according props", () => {
    const props = {
      numberOfLines: 60,
      options: [{ value: "1" }, { value: "2" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.size).toBe(props.numberOfLines);
  });

  it("should call onSelection on options click", () => {
    const props = {
      options: [{ value: "1" }, { value: "2" }, { value: "3" }],
      onSelect: vi.fn(),
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");

    fireEvent.change(select, { target: { value: "1" } });
    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenLastCalledWith(["1"]);
  });

  it("should render the label", () => {
    const props = {
      title: "The box",
      options: [{ value: "1" }, { value: "2" }, { value: "3" }],
      onSelect: () => {},
    };

    const { getByText } = render(<SelectBox {...props} />);
    expect(getByText("The box")).toBeTruthy();
  });
});
