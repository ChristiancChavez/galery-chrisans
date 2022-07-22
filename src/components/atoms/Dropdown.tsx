import React, {useState} from 'react';
import { Select, MenuItem, InputLabel, SelectChangeEvent  } from '@mui/material';

type selectTypes = {
  label: string,
  id: number,
  testId: string,
  //onChange: (() => void),
  items: {value: string, itemId: number, name: string}[]
}

const Dropdown = ({label, id, testId, items}:selectTypes) => {

  const [valueSelect, setValueSelect] = useState('');

  const handleChange = (event: SelectChangeEvent ) => {
    setValueSelect(event.target.value as string);
  };
  return (
    <>
      <InputLabel data-testid="select_label">{label}</InputLabel>
      <Select
        labelId={`${label}-${id}`}
        data-testid={testId}
        id={testId}
        value={valueSelect}
        label={label}
        onChange={handleChange}
        aria-label={`Selecciona ${label}`}
      >
        {
          items.map(item => <MenuItem  className='menuItem' value={item.value} data-testId={'menuItem'} key={item.itemId} aria-label={item.name}>{item.name}</MenuItem>)
        }
      </Select>
    </>
  );
};

export default Dropdown;
