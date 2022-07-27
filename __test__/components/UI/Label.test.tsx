import { render } from "@testing-library/react";
import Label from "../../../src/components/UI/Label";

describe("framework/ui - Label", () => {
  it("Render Normally", () => {
    const { container } = render(<Label text="_label_" />);
    const span = container.querySelector("span");

    expect(span).toHaveTextContent("_label_");
    expect(span).toHaveClass("wk-label");
  });

  it("Render Normal Size", () => {
    const { container } = render(<Label text="_label_" size="normal" />);
    const span = container.querySelector("span");

    expect(span).toHaveTextContent("_label_");
    expect(span).toHaveClass("wk-label--normal");
  });

  it("Render Big Size", () => {
    const { container } = render(<Label text="_label_" size="big" />);
    const span = container.querySelector("span");

    expect(span).toHaveTextContent("_label_");
    expect(span).toHaveClass("wk-label--big");
  });

  it("Render Small Size", () => {
    const { container } = render(<Label text="_label_" size="small" />);
    const span = container.querySelector("span");

    expect(span).toHaveTextContent("_label_");
    expect(span).toHaveClass("wk-label--small");
  });
});
