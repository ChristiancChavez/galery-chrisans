import { render, screen } from "@testing-library/react";
import React from "react";
import Paragraph from "../../../components/atoms/Paragraph";

describe("test Paragraph component", () => {
  test("should render a paragraph", () => {
    render(<Paragraph text="este es un parrafo" testId="paragraph" />);
    const paragraph = screen.getByText("este es un parrafo");
    expect(paragraph).toBeInTheDocument();
  });

  test("shouldn't render a paragraph", () => {
    render(<Paragraph text="este es un parrafo" testId="paragraphWithoutText" />);
    const paragraph = screen.getByTestId("paragraphWithoutText");
    expect(paragraph).not.toBeInTheDocument();
  });

  test("should render a paragraph by testId", () => {
    render(<Paragraph text="este es un parrafo" testId="paragraph" />);
    const paragraph = screen.getByTestId("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
