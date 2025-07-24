import React, { useState } from 'react';
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const dataList = [
  'Chinese Wok',
  'Pizza Hut',
  'Domino’s',
  'McDonald’s',
  'Burger King',
  'Taco Bell',
  'KFC',
  'Haldiram’s',
  'Subway',
];

export default function SearchComponent() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === '') {
      setFilteredData([]);
    } else {
      const filtered = dataList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <Box sx={{ width: 500, margin: 'auto', p:2 }}>
      <TextField
        fullWidth
        placeholder="Search restaurants..."
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      {filteredData.length > 0 && (
        <Paper elevation={3} sx={{ mt: 1, maxHeight: 200, overflowY: 'auto' }}>
          <List dense>
            {filteredData.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}

