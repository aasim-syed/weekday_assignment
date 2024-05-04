// actions/actions.js
export const SET_JOBS = 'SET_JOBS';
export const FILTER_JOBS = 'FILTER_JOBS';
export const INCREMENT_OFFSET = 'INCREMENT_OFFSET';

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs
});

export const filterJobs = (filters) => ({
  type: FILTER_JOBS,
  payload: filters
});

export const incrementOffset = (value) => ({
  type: INCREMENT_OFFSET,
  payload: value
});
