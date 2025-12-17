import { render, fireEvent, cleanup } from "@testing-library/react";
import { vi } from "vitest";

import TripleSelectBox from "./";

describe("<TripleSelectBox />", () => {
  afterEach(cleanup);

  it("should render the options", () => {
    const props = {
      options: {
        left: [
          "Courgette",
          "Date",
          "Grape",
          "Garlic",
          "Fig",
          "Endive",
          "Fennel",
        ],
        center: ["Mango", "Lemon", "Leek", "Guava", "Mushroom", "Melon"],
        right: [
          "Apple",
          "Orange",
          "Apricot",
          "Avocado",
          "Beetroot",
          "Broccoli",
          "Carrot",
          "Clementine",
        ],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");
    expect(selects).toHaveLength(3);
    expect(
      Array.from(selects[0].children).every((child) =>
        props.options.left.includes(child.value)
      )
    ).toBeTruthy();
    expect(
      Array.from(selects[1].children).every((child) =>
        props.options.center.includes(child.value)
      )
    ).toBeTruthy();
    expect(
      Array.from(selects[2].children).every((child) =>
        props.options.right.includes(child.value)
      )
    ).toBeTruthy();
  });

  it("should render the box titles", () => {
    const props = {
      options: {
        left: [
          "Courgette",
          "Date",
          "Grape",
          "Garlic",
          "Fig",
          "Endive",
          "Fennel",
        ],
        center: ["Mango", "Lemon", "Leek", "Guava", "Mushroom", "Melon"],
        right: [
          "Apple",
          "Orange",
          "Apricot",
          "Avocado",
          "Beetroot",
          "Broccoli",
          "Carrot",
          "Clementine",
        ],
      },
      titles: {
        left: "left box",
        center: "center box",
        right: "right box",
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const labels = container.querySelectorAll("label");

    expect(labels).toHaveLength(3);
    expect(labels[0].textContent).toBe("left box");
    expect(labels[1].textContent).toBe("center box");
    expect(labels[2].textContent).toBe("right box");
  });

  it("should be capable of send values from left to center and vice-versa", () => {
    const props = {
      options: {
        left: ["a left box value"],
        center: ["3"],
        right: ["5"],
      },
      onChange: vi.fn(),
    };

    const { container, getAllByText } = render(<TripleSelectBox {...props} />);
    const [leftToCenterButton] = getAllByText(">>");
    const [centerToLeftButton] = getAllByText("<<");
    const [leftSelect, centerSelect] = container.querySelectorAll("select");

    fireEvent.change(leftSelect, { target: { value: "a left box value" } });
    fireEvent.click(leftToCenterButton);

    expect(
      Array.from(centerSelect.children).some(
        (child) => child.value === "a left box value"
      )
    ).toBeTruthy();
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: [{ value: "3" }, { value: "a left box value" }],
      left: [],
      right: [{ value: "5" }],
    });

    fireEvent.change(centerSelect, { target: { value: "3" } });
    fireEvent.click(centerToLeftButton);

    expect(
      Array.from(leftSelect.children).some((child) => child.value === "3")
    ).toBeTruthy();
    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: [{ value: "a left box value" }],
      left: [{ value: "3" }],
      right: [{ value: "5" }],
    });
  });

  it("should be capable of send values from right to center and vice-versa", () => {
    const props = {
      options: {
        left: [{ value: "a left box value" }],
        center: [{ value: "3" }],
        right: [{ value: "5" }],
      },
      onChange: vi.fn(),
    };

    const { container, getAllByText } = render(<TripleSelectBox {...props} />);
    const [, centerToRightButton] = getAllByText(">>");
    const [, rightToCenterButton] = getAllByText("<<");
    const [, centerSelect, rightSelect] = container.querySelectorAll("select");

    fireEvent.change(rightSelect, { target: { value: "5" } });
    fireEvent.click(rightToCenterButton);

    expect(
      Array.from(centerSelect.children).some((child) => child.value === "5")
    ).toBeTruthy();
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: [{ value: "3" }, { value: "5" }],
      left: [{ value: "a left box value" }],
      right: [],
    });

    fireEvent.change(centerSelect, { target: { value: "3" } });
    fireEvent.click(centerToRightButton);

    expect(
      Array.from(rightSelect.children).some((child) => child.value === "3")
    ).toBeTruthy();
    expect(props.onChange).toHaveBeenCalledTimes(2);
    expect(props.onChange).toHaveBeenLastCalledWith({
      center: [{ value: "5" }],
      left: [{ value: "a left box value" }],
      right: [{ value: "3" }],
    });
  });

  it("should apply custom id to select boxes", () => {
    const props = {
      id: "custom-triple-box",
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");

    expect(selects[0].id).toBe("custom-triple-box-left");
    expect(selects[1].id).toBe("custom-triple-box-center");
    expect(selects[2].id).toBe("custom-triple-box-right");
  });

  it("should use default id when not provided", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");

    expect(selects[0].id).toBe("react-triple-select-box-left");
    expect(selects[1].id).toBe("react-triple-select-box-center");
    expect(selects[2].id).toBe("react-triple-select-box-right");
  });

  it("should render options with label property", () => {
    const props = {
      options: {
        left: [{ value: "1", label: "One" }],
        center: [{ value: "2", label: "Two" }],
        right: [{ value: "3", label: "Three" }],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");

    expect(selects[0].children[0].textContent).toBe("One");
    expect(selects[1].children[0].textContent).toBe("Two");
    expect(selects[2].children[0].textContent).toBe("Three");
  });

  it("should apply numberOfLines to each box", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      numberOfLines: {
        left: 5,
        center: 10,
        right: 15,
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");

    expect(selects[0].size).toBe(5);
    expect(selects[1].size).toBe(10);
    expect(selects[2].size).toBe(15);
  });

  it("should apply custom classNames to container", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      classNames: {
        container: "custom-main-container",
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const section = container.querySelector("section");

    expect(section.className).toBe("custom-main-container");
  });

  it("should disable left control buttons when no items are selected", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { getAllByText } = render(<TripleSelectBox {...props} />);
    const [leftToCenterButton] = getAllByText(">>");
    const [centerToLeftButton] = getAllByText("<<");

    expect(leftToCenterButton.disabled).toBe(true);
    expect(centerToLeftButton.disabled).toBe(true);
  });

  it("should enable buttons after selecting items", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container, getAllByText } = render(<TripleSelectBox {...props} />);
    const [leftToCenterButton] = getAllByText(">>");
    const [leftSelect] = container.querySelectorAll("select");

    expect(leftToCenterButton.disabled).toBe(true);

    fireEvent.change(leftSelect, { target: { value: "1" } });

    expect(leftToCenterButton.disabled).toBe(false);
  });

  it("should have role=group on main container", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const section = container.querySelector("section");

    expect(section.getAttribute("role")).toBe("group");
  });

  it("should have aria-label on main container", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const section = container.querySelector("section");

    expect(section.getAttribute("aria-label")).toBe("Triple select box");
  });

  it("should pass SelectsProps to SelectBox components", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      SelectsProps: {
        "data-testid": "custom-select",
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const selects = container.querySelectorAll("select");

    selects.forEach((select) => {
      expect(select.getAttribute("data-testid")).toBe("custom-select");
    });
  });

  it("should pass ButtonsProps to SelectBoxControl components", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      ButtonsProps: {
        "data-testid": "custom-button",
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const buttons = container.querySelectorAll("button");

    buttons.forEach((button) => {
      expect(button.getAttribute("data-testid")).toBe("custom-button");
    });
  });

  it("should have proper aria-labels on control buttons with custom titles", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      titles: {
        left: "Available",
        center: "Selected",
        right: "Rejected",
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const buttons = container.querySelectorAll("button");

    expect(buttons[0].getAttribute("aria-label")).toBe(
      "Move selected from Selected to Available"
    );
    expect(buttons[1].getAttribute("aria-label")).toBe(
      "Move selected from Available to Selected"
    );
    expect(buttons[2].getAttribute("aria-label")).toBe(
      "Move selected from Rejected to Selected"
    );
    expect(buttons[3].getAttribute("aria-label")).toBe(
      "Move selected from Selected to Rejected"
    );
  });

  it("should use default titles in aria-labels when titles not provided", () => {
    const props = {
      options: {
        left: ["1"],
        center: ["2"],
        right: ["3"],
      },
      onChange: () => {},
    };

    const { container } = render(<TripleSelectBox {...props} />);
    const buttons = container.querySelectorAll("button");

    expect(buttons[0].getAttribute("aria-label")).toBe(
      "Move selected from Center to Left"
    );
    expect(buttons[1].getAttribute("aria-label")).toBe(
      "Move selected from Left to Center"
    );
  });
});
