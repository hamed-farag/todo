import { render } from "@testing-library/react";
import Empty from "../../../src/components/UI/Empty";

describe("framework/ui - Empty", () => {
  it("Render Normally", () => {
    const { container } = render(<Empty title="empty_title" icon={<span>empty_icon</span>} />);

    expect(container.firstChild).toHaveClass("wk-empty");
  });

  it("Render Normally with expected title", () => {
    const { container } = render(<Empty title="empty_title" icon={<span>empty_icon</span>} />);

    expect(container.firstChild).toHaveTextContent("empty_title");
  });

  it("Render Normally with expected icon", () => {
    const { container } = render(<Empty title="empty_title" icon={<span>empty_icon</span>} />);

    const span = container.querySelector("span");

    expect(span).toHaveTextContent("empty_icon");
  });

  it("Render Normally with expected icon & title", () => {
    const { container } = render(<Empty title="empty_title" icon={<span>empty_icon</span>} />);
    const span = container.querySelector("span");

    expect(span).toHaveTextContent("empty_icon");
    expect(container.firstChild).toHaveTextContent("empty_title");
  });
});
