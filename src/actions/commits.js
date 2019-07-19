export const SAGA_COMMITS_REQUEST = "SAGA_COMMITS_REQUEST";
export const SAGA_COMMITS_SUCCESS = "SAGA_COMMITS_SUCCESS";
export const SAGA_COMMITS_FAILURE = "SAGA_COMMITS_FAILURE";

export const getAll = (user, repos, page) => ({
  type: SAGA_COMMITS_REQUEST,
  user,
  repos,
  page
});
