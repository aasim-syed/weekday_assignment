// App.js
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import JobCard from './Components/JobCard';
import Filter from './Components/Filter';
import InfiniteScroll from './Components/InfiniteScroll';
import fetchData from './utils/api';

function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  
  
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const data = await fetchData(limit, offset);
    if (data && data.jdList && Array.isArray(data.jdList)) {
      setJobs(prevJobs => [...prevJobs, ...data.jdList]);
      setOffset(offset + limit);
    } else {
      console.error("Invalid data format received from API");
    }
  }

  const handleFilter = (filters) => {
    // Filter jobs based on user's selected criteria
    const filteredJobs = jobs.filter(job => {
      return (
        (!filters.minExperience || job.minExp >= parseInt(filters.minExperience)) &&
        (!filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
        (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.remote || job.location.toLowerCase() === 'remote') === (filters.remote.toLowerCase() === 'remote') &&
        (!filters.techStack || job.techStack.toLowerCase().includes(filters.techStack.toLowerCase())) &&
        (!filters.role || job.jobRole.toLowerCase().includes(filters.role.toLowerCase())) &&
        (!filters.minBasePay || job.minJdSalary >= parseInt(filters.minBasePay))
      );
    });
    setJobs(filteredJobs);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Filter onFilter={handleFilter} />
        </Grid>
        <Grid item xs={12} md={9} container direction="row" spacing={3}>
          {jobs.map(job => (
            <Grid key={job.jdUid} item xs={12} sm={6} md={4} lg={3}>
              <JobCard job={job} />
            </Grid>
          ))}
          <InfiniteScroll loadMore={fetchJobs} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
