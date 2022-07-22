import React from "react";

type paragraphTypes = {
  text: string;
  testId: string;
};
const Paragraph = ({ text, testId }: paragraphTypes) => {
  return (
    <span
      data-testid={testId}
      aria-label={`Se despliega el siguiente texto: ${text}`}
    >
      {text}
    </span>
  );
};

export default Paragraph;
