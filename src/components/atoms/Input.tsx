import React from 'react';
import { Input } from '@mui/material';
import { TestIdType } from '../../Types/types';

export interface InputTypes extends TestIdType {
  placeholder: string,
  type: string,
  name: string
}

const InputForm = ({ placeholder, type, testId, name }:InputTypes ) => {

  return (
    <Input 
      aria-label={`Este es un input para ${placeholder}`}
      placeholder={placeholder} 
      type={type} 
      required
      data-testid={testId}
      name={name}
    />
  )
};

export default InputForm;
