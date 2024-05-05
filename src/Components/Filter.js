import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Box } from '@material-ui/core';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleFilter = () => {
    // Pass filters to parent component for processing
    onFilter(filters);
  };

  // Update the state of filters when input changes
  const handleInputChange = (e, filterName) => {
    setFilters({
      ...filters,
      [filterName]: e.target.value
    });
  };

  return (
    <Box marginTop={10}>
      <Grid container spacing={2} justify="flex-start" alignItems="center" >
        <Grid item xs={12} sm={2}>
          <TextField
            label="Min Experience"
            value={filters.minExperience}
            onChange={(e) => handleInputChange(e, 'minExperience')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Company Name"
            value={filters.companyName}
            onChange={(e) => handleInputChange(e, 'companyName')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Location"
            value={filters.location}
            onChange={(e) => handleInputChange(e, 'location')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Remote</InputLabel>
            <Select
              value={filters.remote}
              onChange={(e) => handleInputChange(e, 'remote')} // Pass the filter name string
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="onsite">On-site</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Tech Stack"
            value={filters.techStack}
            onChange={(e) => handleInputChange(e, 'techStack')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Role"
            value={filters.role}
            onChange={(e) => handleInputChange(e, 'role')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Min Base Pay"
            value={filters.minBasePay}
            onChange={(e) => handleInputChange(e, 'minBasePay')} // Pass the filter name string
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" color="primary" onClick={handleFilter} fullWidth>
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Filter;
