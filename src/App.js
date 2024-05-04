import React, { useEffect } from 'react';
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
  const limit = 10;

  useEffect(() => {
    dispatch(fetchDataAsync(limit, offset));
  }, [dispatch, offset, limit]);

  const handleFilter = (filters) => {
    // Dispatch action to filter jobs
    dispatch(filterJobs(filters));
  };

  return (
    <Container>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Filter onFilter={handleFilter} />
        <Grid item xs={12} md={9} container direction="row" spacing={3} justify="center">
          {jobs.map(job => (
            <Grid key={job.jdUid} item xs={12} sm={6} md={4} lg={3}>
              <JobCard job={job} />
            </Grid>
          ))}
          <InfiniteScroll loadMore={() => dispatch(fetchDataAsync(limit, offset))} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
