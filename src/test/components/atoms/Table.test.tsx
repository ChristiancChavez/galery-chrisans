import { render, screen } from "@testing-library/react";
import React from "react";
import Table from "../../../components/atoms/Table";

describe('test Table component', () => {
  it('should render table', () => {
    render(<Table testId='table' />);
    const renderTable = screen.getByTestId('table');
    expect(renderTable).toBeInTheDocument();
  });
});
