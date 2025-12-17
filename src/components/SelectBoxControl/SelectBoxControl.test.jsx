import { render, fireEvent, cleanup } from "@testing-library/react";
import { vi } from "vitest";

import SelectBoxControl from "./";

describe("<SelectBoxControl />", () => {
  afterEach(cleanup);

  it("should render the controls", () => {
    const props = {
      sendToRight: () => {},
      sendToLeft: () => {},
    };

    const { container, getAllByText } = render(<SelectBoxControl {...props} />);
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(2);
    expect(getAllByText("<<")).toHaveLength(1);
    expect(getAllByText(">>")).toHaveLength(1);
  });

  it("should disabled buttons according props", () => {
    const props = {
      sendToLeft: () => {},
      sendToLeftDisabled: false,
      sendToRight: () => {},
      sendToRightDisabled: true,
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const [sendToLeftButton, sendToRightButton] =
      container.querySelectorAll("button");

    expect(sendToLeftButton.disabled).toBeFalsy();
    expect(sendToRightButton.disabled).toBeTruthy();
  });

  it("should call sendToLeft and sendToRight methods on click", () => {
    const props = {
      sendToLeft: vi.fn(),
      sendToRight: vi.fn(),
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const [sendToLeftButton, sendToRightButton] =
      container.querySelectorAll("button");

    fireEvent.click(sendToLeftButton);
    expect(props.sendToLeft).toHaveBeenCalledTimes(1);

    fireEvent.click(sendToRightButton);
    expect(props.sendToRight).toHaveBeenCalledTimes(1);
  });

  it("should apply custom classNames when provided", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
      classNames: {
        container: "custom-control-container",
        button: "custom-control-button",
      },
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const section = container.querySelector("section");
    const buttons = container.querySelectorAll("button");

    expect(section.className).toBe("custom-control-container");
    buttons.forEach((button) => {
      expect(button.className).toBe("custom-control-button");
    });
  });

  it("should apply custom sendToLeftLabel aria-label when provided", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
      sendToLeftLabel: "Move items to the left box",
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const [sendToLeftButton] = container.querySelectorAll("button");

    expect(sendToLeftButton.getAttribute("aria-label")).toBe(
      "Move items to the left box"
    );
  });

  it("should apply custom sendToRightLabel aria-label when provided", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
      sendToRightLabel: "Move items to the right box",
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const [, sendToRightButton] = container.querySelectorAll("button");

    expect(sendToRightButton.getAttribute("aria-label")).toBe(
      "Move items to the right box"
    );
  });

  it("should use default aria-labels when custom labels not provided", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const [sendToLeftButton, sendToRightButton] =
      container.querySelectorAll("button");

    expect(sendToLeftButton.getAttribute("aria-label")).toBe(
      "Move selected items left"
    );
    expect(sendToRightButton.getAttribute("aria-label")).toBe(
      "Move selected items right"
    );
  });

  it("should spread ButtonsProps to button elements", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
      ButtonsProps: {
        "data-testid": "control-button",
        tabIndex: 3,
      },
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const buttons = container.querySelectorAll("button");

    buttons.forEach((button) => {
      expect(button.getAttribute("data-testid")).toBe("control-button");
      expect(button.tabIndex).toBe(3);
    });
  });

  it("should have role=group on container", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const section = container.querySelector("section");

    expect(section.getAttribute("role")).toBe("group");
  });

  it("should have aria-label on container", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const section = container.querySelector("section");

    expect(section.getAttribute("aria-label")).toBe("Transfer controls");
  });

  it("should have type=button on buttons", () => {
    const props = {
      sendToLeft: () => {},
      sendToRight: () => {},
    };

    const { container } = render(<SelectBoxControl {...props} />);
    const buttons = container.querySelectorAll("button");

    buttons.forEach((button) => {
      expect(button.type).toBe("button");
    });
  });
});
