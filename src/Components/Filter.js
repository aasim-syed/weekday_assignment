// Filter.js
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const Filter = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState('');
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilter = () => {
    const filters = {
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay
    };
    // Pass filters to parent component for processing
    onFilter(filters);
  };

  return (
    <div>
      <TextField
        label="Min Experience"
        value={minExperience}
        onChange={(e) => setMinExperience(e.target.value)}
      />
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FormControl>
        <InputLabel>Remote</InputLabel>
        <Select
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="onsite">On-site</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
      />
      <TextField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <TextField
        label="Min Base Pay"
        value={minBasePay}
        onChange={(e) => setMinBasePay(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </div>
  );
}

export default Filter;
