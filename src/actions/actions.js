// actions/actions.js
export const SET_JOBS = 'SET_JOBS';
export const FILTER_JOBS = 'FILTER_JOBS';
export const INCREMENT_OFFSET = 'INCREMENT_OFFSET';

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs
});

// actions/actions.js
export const filterJobs = ({ minExperience, companyName, location, remote, techStack, role, minBasePay }) => ({
    type: FILTER_JOBS,
    payload: { minExperience, companyName, location, remote, techStack, role, minBasePay },
  });
  

export const incrementOffset = (value) => ({
  type: INCREMENT_OFFSET,
  payload: value
});
