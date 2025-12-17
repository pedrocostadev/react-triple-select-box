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

  it("should apply id prop to the select element", () => {
    const props = {
      id: "my-select-box",
      options: [{ value: "1" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.id).toBe("my-select-box");
  });

  it("should render option label instead of value when label is provided", () => {
    const props = {
      options: [
        { value: "1", label: "Option One" },
        { value: "2", label: "Option Two" },
        { value: "3" },
      ],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const options = container.querySelectorAll("option");

    expect(options[0].textContent).toBe("Option One");
    expect(options[1].textContent).toBe("Option Two");
    expect(options[2].textContent).toBe("3");
  });

  it("should apply selected class to options with selected state", () => {
    const props = {
      options: [
        { value: "1", selected: true },
        { value: "2", selected: false },
        { value: "3" },
      ],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const options = container.querySelectorAll("option");

    expect(options[0].className).toContain("select-box-option-selected");
    expect(options[1].className).not.toContain("select-box-option-selected");
    expect(options[2].className).not.toContain("select-box-option-selected");
  });

  it("should apply custom classNames when provided", () => {
    const props = {
      options: [{ value: "1", selected: true }],
      onSelect: () => {},
      classNames: {
        container: "custom-container",
        label: "custom-label",
        select: "custom-select",
        selectOption: "custom-option",
        selectOptionSelected: "custom-selected",
      },
    };

    const { container } = render(<SelectBox {...props} />);
    const section = container.querySelector("section");
    const label = container.querySelector("label");
    const select = container.querySelector("select");
    const option = container.querySelector("option");

    expect(section.className).toBe("custom-container");
    expect(label.className).toBe("custom-label");
    expect(select.className).toBe("custom-select");
    expect(option.className).toContain("custom-option");
    expect(option.className).toContain("custom-selected");
  });

  it("should spread SelectsProps to the select element", () => {
    const props = {
      options: [{ value: "1" }],
      onSelect: () => {},
      SelectsProps: {
        "data-testid": "my-select",
        tabIndex: 5,
      },
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");

    expect(select.getAttribute("data-testid")).toBe("my-select");
    expect(select.tabIndex).toBe(5);
  });

  it("should spread SelectOptionsProps to option elements", () => {
    const props = {
      options: [{ value: "1" }, { value: "2" }],
      onSelect: () => {},
      SelectOptionsProps: {
        "data-custom": "custom-value",
      },
    };

    const { container } = render(<SelectBox {...props} />);
    const options = container.querySelectorAll("option");

    options.forEach((option) => {
      expect(option.getAttribute("data-custom")).toBe("custom-value");
    });
  });

  it("should apply numberOfLines as size attribute", () => {
    const props = {
      numberOfLines: 10,
      options: [{ value: "1" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.size).toBe(10);
  });

  it("should have multiple attribute on select element", () => {
    const props = {
      options: [{ value: "1" }, { value: "2" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.multiple).toBe(true);
  });

  it("should use aria-label with title when provided", () => {
    const props = {
      title: "My Select",
      options: [{ value: "1" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.getAttribute("aria-label")).toBe("My Select");
  });

  it("should use default aria-label when title is not provided", () => {
    const props = {
      options: [{ value: "1" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const select = container.querySelector("select");
    expect(select.getAttribute("aria-label")).toBe("Select options");
  });

  it("should associate label with select via htmlFor", () => {
    const props = {
      id: "test-select",
      title: "Test Label",
      options: [{ value: "1" }],
      onSelect: () => {},
    };

    const { container } = render(<SelectBox {...props} />);
    const label = container.querySelector("label");
    expect(label.htmlFor).toBe("test-select");
  });
});
