import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textbox from "../../../src/components/UI/Textbox";

const setup = () => {
  const utils = render(<Textbox value="the textbox" placeholder="the placeholder" onChange={() => {}} />);
  const input = utils.getByRole("textbox");
  return {
    input,
    ...utils,
  };
};

describe("framework/ui - Textbox", () => {
  it("Render Normally", () => {
    const utils = render(<Textbox value="the textbox" placeholder="the placeholder" onChange={() => {}} />);
    const input = utils.getByRole("textbox");

    expect(input).toHaveClass("wk-textbox");
    expect(input.value).toBe("the textbox");
  });

  it("Handle OnChange", () => {
    const handleChange = jest.fn();
    const inputValue = "hello box";

    render(<Textbox value="the textbox" placeholder="the placeholder" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    userEvent.type(input, inputValue);

    expect(input).toHaveValue(inputValue);
  });
});
