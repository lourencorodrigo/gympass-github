import {
  SAGA_COMMITS_SUCCESS,
  SAGA_COMMITS_REQUEST,
  SAGA_COMMITS_FAILURE
} from "../actions/commits";

const initialState = {
  commits: [],
  loading: false,
  error: false
};

export const commits = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_COMMITS_REQUEST:
      return { ...state, loading: true };
    case SAGA_COMMITS_SUCCESS:
      return {
        ...state,
        commits: action.data,
        loading: false
      };
    case SAGA_COMMITS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
