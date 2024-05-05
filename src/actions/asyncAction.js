// actions/asyncAction.js
import { fetchData } from '../utils/api';
import { setJobs, incrementOffset,filterJobs } from './actions';

export const fetchDataAsync = (limit, offset, filters) => {
  return async (dispatch) => {
    try {
      const data = await fetchData(limit, offset);
      if (data && data.jdList && Array.isArray(data.jdList)) {
        dispatch(setJobs(data.jdList));  // Set the full job list
        if (filters) {
          dispatch(filterJobs(filters));  // Apply filters right after setting jobs
        }
        dispatch(incrementOffset(limit + data.TotalCount));
      } else {
        console.error("Invalid data format received from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};