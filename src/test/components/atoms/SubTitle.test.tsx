import { render } from "@testing-library/react";
import React from "react";
import SubTitle from "../../../components/atoms/SubTitle";

describe("test ButtonIcon component", () => {
  test("should SubTitle exists", () => {
    const { getByTestId } = render(<SubTitle text="" testId="subtitle" />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle).toBeTruthy();
  });

  test("render SubTitle with empty string", () => {
    const { getByTestId } = render(<SubTitle text="" testId="subtitle" />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle.innerHTML).toBe("");
  });

  test("render SubTitle with string", () => {
    const { getByTestId } = render(
      <SubTitle text="Clients" testId="subtitle" />
    );
    const subtitle = getByTestId("subtitle");
    expect(subtitle.innerHTML).toBe("Clients");
  });

  test("render SubTitle with empty string, not to be another string", () => {
    const { getByTestId } = render(<SubTitle text="" testId="subtitle" />);
    const subtitle = getByTestId("subtitle");
    expect(subtitle.innerHTML).not.toBe("Clients");
  });
});
