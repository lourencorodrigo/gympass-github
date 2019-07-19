export const SAGA_REPO_REQUEST = "SAGA_REPO_REQUEST";
export const SAGA_REPO_SUCCESS = "SAGA_REPO_SUCCESS";
export const SAGA_REPO_FAILURE = "SAGA_REPO_FAILURE";

export const getAll = user => ({
  type: SAGA_REPO_REQUEST,
  user
});
