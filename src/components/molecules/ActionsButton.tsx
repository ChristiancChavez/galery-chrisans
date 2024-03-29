import React from 'react';
import Button from 'src/components/atoms/Button';
import Icon from 'src/components/atoms/Icon';
import { Stack, Divider } from '@mui/material';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ActionsButtonTypes {
  buttons: { id: string, label: string, testId: string, icon: IconProp | string }[]
}
const ActionsButton = ({ buttons }:ActionsButtonTypes ) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
    >
      {buttons.map(button => (
        <Button
          key={button.id} 
          label={button.label} 
          testId={button.testId}
        >
          <Icon iconName={button.icon} />
        </Button> 
        ))
      }
    </Stack>
  );
};

export default ActionsButton;
