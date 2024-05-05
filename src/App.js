// App.js
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
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    if (filters !== null) {
      // Fetch data only when filters change
      dispatch(fetchDataAsync(limit, offset, filters));
    }
  }, [dispatch, limit, offset, filters]);

  const handleFilter = (newFilters) => {
    // Dispatch filterJobs action
    dispatch(filterJobs(newFilters));
    // Optionally, fetch data again if necessary
    dispatch(fetchDataAsync(limit, offset, newFilters));
};


  const loadMore = () => {
    // Increase limit before fetching more data
    setLimit(prevLimit => prevLimit + 10);
    dispatch(fetchDataAsync(limit + 10, offset, filters));
  };

  return (
    <Container>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Filter onFilter={handleFilter} />
        <Grid item xs={12} md={9} container direction="row" justify="center">
          {jobs.map(job => (
            <Grid key={job.jdUid} item xs={12} sm={6} md={4} lg={3}>
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
