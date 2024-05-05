import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import JobCard from './Components/JobCard';
import Filter from './Components/Filter';
import InfiniteScroll from './Components/InfiniteScroll';
import { fetchDataAsync } from './actions/asyncAction';
import { filterJobs } from './actions/actions';

function App() {
  const dispatch = useDispatch();
  const { jobs } = useSelector(state => state.data);
  const offset = useSelector(state => state.data.offset);
  const [limit, setLimit] = useState(10);
  
  // Define filters state
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    // Pass filters state to fetchDataAsync
    dispatch(fetchDataAsync(limit, offset, filters));
  }, [dispatch, offset, limit, filters]);

  const handleFilter = (newFilters) => {
    // Dispatch the filterJobs action
    dispatch(filterJobs(newFilters));
  };
  

  const loadMore = () => {
    // Increase limit before fetching more data
    setLimit(prevLimit => prevLimit + 10);
    dispatch(fetchDataAsync(limit + 10, offset, filters)); // Pass updated limit to loadMore
  };
  
  return (
    <Container>
      <Grid container spacing={3} direction="column" alignItems="center" >
        <Filter onFilter={handleFilter} />
        <Grid item xs={12} md={9} container direction="row" GridJustification="center">
          {jobs.map(job => (
            <Grid key={job.jdUid} item xs={12} sm={6} md={4} lg={3} >
              <JobCard job={job} />
            </Grid>
          ))}
          <InfiniteScroll loadMore={loadMore} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
