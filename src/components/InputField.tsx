import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');

  let navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    navigate("/ques", { state: name });
  }

  const handle = (e: any) => {
    setName(e.target.value)
  }

  console.log(name);


  return (
    <div>
      <p>
        <TextField id="filled-basic" label="Enter Your Name" variant="filled" name={name} onChange={handle} />
      </p>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"><h3>Select Your Language</h3></FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="React.js" control={<Radio />} label="React.js" />
            <FormControlLabel value="Python" control={<Radio />} label="Python" />
          </RadioGroup>
        </FormControl>
      </div>
      <p> <Button variant="contained" disabled={!name} onClick={handleClick}>Start Quiz</Button></p>
    </div>
  )
}

export default InputField