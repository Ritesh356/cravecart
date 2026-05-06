import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Mycontext } from '../App';

const Menu = (props) => {
  const [age, setAge] = useState('');
  const context = useContext(Mycontext);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth:props.size,'& .MuiOutlinedInput-notchedOutline': {
      borderColor: context.lightMode ===false ? '#e4e4e4' : '',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: context.lightMode ===false ? '#e4e4e4' : '',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: context.lightMode ===false ? '#e4e4e4' : '',
    }, }} size="small">
        <InputLabel id="demo-select-small-label" sx={{ color: context.lightMode ===false ? '#e4e4e4' : '' }}>{props.head}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
          className='menudark'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>{props.valued?.[0]}</MenuItem>
          <MenuItem value={2}>{props.valued?.[1]}</MenuItem>
          <MenuItem value={3}>{props.valued?.[2]}</MenuItem>
          <MenuItem value={4}>{props.valued?.[3]}</MenuItem>
          <MenuItem value={5}>{props.valued?.[4]}</MenuItem>

        </Select>
      </FormControl>
    </>
  )
}

export default Menu;