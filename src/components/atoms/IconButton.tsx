import React from "react";
import { Fade, Tooltip, Button } from "@mui/material";

type IconTypes = {
  label: string;
  children?: React.ReactChild;
  testId: string;
};

export const ButtonIcon = ({ label, children, testId }: IconTypes) => {
  const handleShowPage = () => console.log(`${label} page`);
  return (
    <Tooltip
      title={label}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 400 }}
      role="tooltip"
    >
      <Button onClick={handleShowPage} variant="text" data-testid={testId}>
        {children}
      </Button>
    </Tooltip>
  );
};
