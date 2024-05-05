import { fetchData } from '../utils/api';
import { setJobs, filterJobs, incrementOffset } from './actions';

export const fetchDataAsync = (limit, offset, filters) => {
  return async (dispatch) => {
    try {
      const data = await fetchData(limit, offset);
      if (data && data.jdList && Array.isArray(data.jdList)) {
        dispatch(setJobs(data.jdList));
        dispatch(incrementOffset(limit+ data.TotalCount));
        // Check if filters exist before dispatching filterJobs action
        if (filters) {
          dispatch(filterJobs(filters));
        }
      } else {
        console.error("Invalid data format received from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};
