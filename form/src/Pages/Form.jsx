import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
export default function ComboBox() {
  return (
    <div style={{ display: "flex", justifyContent: 'center'}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
    
    <div style={{display: "flex", justifyContent: 'center', marginLeft: '.5rem'}}>
    <Button variant="contained" sx={{width: 100}} startIcon={<ManageSearchIcon/>}></Button>
    </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Tiles', year: 1994 },
  { label: 'Food', year: 1972 },
  { label: 'Accessories', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];
