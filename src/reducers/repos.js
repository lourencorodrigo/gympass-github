import {
  SAGA_REPO_SUCCESS,
  SAGA_REPO_REQUEST,
  SAGA_REPO_FAILURE
} from "../actions/repos";

const initialState = {
  repos: [],
  loading: false,
  incompleteResults: false,
  error: false
};

export const repos = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_REPO_REQUEST:
      return { ...state, loading: true };
    case SAGA_REPO_SUCCESS:
      return {
        ...state,
        repos: action.data.items,
        incompleteResults: action.data.incomplete_results,
        loading: false
      };
    case SAGA_REPO_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
