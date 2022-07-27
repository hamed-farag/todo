import { render } from "@testing-library/react";
import Spinner from "../../../src/components/UI/Spinner";

describe("framework/ui - Spinner", () => {
  it("Render Normally", () => {
    const { container } = render(<Spinner />);
    const span = container.querySelector("span");

    expect(span).toHaveClass("wk-spinner");
  });

  it("Render Normal Size", () => {
    const { container } = render(<Spinner size="normal" />);
    const span = container.querySelector("span");

    expect(span).toHaveClass("wk-spinner");
    expect(span).toHaveClass("wk-spinner--normal");
  });

  it("Render Big Size", () => {
    const { container } = render(<Spinner size="big" />);
    const span = container.querySelector("span");

    expect(span).toHaveClass("wk-spinner");
    expect(span).toHaveClass("wk-spinner--big");
  });

  it("Render Small Size", () => {
    const { container } = render(<Spinner size="small" />);
    const span = container.querySelector("span");

    expect(span).toHaveClass("wk-spinner");
    expect(span).toHaveClass("wk-spinner--small");
  });
});
