// reducers/dataReducer.js
import { SET_JOBS, FILTER_JOBS, INCREMENT_OFFSET } from '../actions/actions';

const initialState = {
    data: {
      jobs: [],
      offset: 0
    }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      console.log("SET_JOBS action dispatched:", action.payload);
      return {
        ...state,
         data: {
          ...state.data,
          jobs: action.payload
        }
      };
      case FILTER_JOBS:
        const { minExperience, companyName, location, remote, techStack, role, minBasePay } = action.payload;
        const filteredJobs = state.data.jobs.filter(job => (
          (!minExperience || job.minExp >= parseInt(minExperience)) &&
          (!companyName || job.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
          (!location || job.location.toLowerCase().includes(location.toLowerCase())) &&
          (!remote || job.location.toLowerCase() === 'remote') === (remote.toLowerCase() === 'remote') &&
          (!techStack || job.techStack.toLowerCase().includes(techStack.toLowerCase())) &&
          (!role || job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
          (!minBasePay || job.minJdSalary >= parseInt(minBasePay))
        ));
        return {
          ...state,
          data: {
            ...state.data,
            jobs: filteredJobs  // Set the filtered jobs
          }
        };
      
    case INCREMENT_OFFSET:
      console.log("INCREMENT_OFFSET action dispatched with payload:", action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          offset: state.data.offset + action.payload
        }
      };
    default:
      return state;
  }
};

export default dataReducer;
