import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Mycontext } from '../App';

const Menu1 = (props) => {
  const [age, setAge] = useState('');
  const context = useContext(Mycontext);

  const handleChange = (event) => {
    setAge(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: props.size,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: context.lightMode === false ? '#e4e4e4' : '',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: context.lightMode === false ? '#e4e4e4' : '',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: context.lightMode === false ? '#e4e4e4' : '',
        },
      }}
      size="small"
    >
      <InputLabel
        id="menu-select-label"
        sx={{ color: context.lightMode === false ? '#e4e4e4' : '' }}
      >
        {props.head}
      </InputLabel>
      <Select
        labelId="menu-select-label"
        id="menu-select"
        value={age}
        label={props.head}
        onChange={handleChange}
        className="menudark"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {props.options?.map((item,index) => (
          <MenuItem key={item.index} value={item._id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Menu1;