import { takeEvery, put, call } from "redux-saga/effects";

import { repoService } from "../services";
import {
  SAGA_REPO_REQUEST,
  SAGA_REPO_SUCCESS,
  SAGA_REPO_FAILURE
} from "../actions/repos";

function* getAllRepos(action) {
  try {
    const response = yield call(repoService.getAll, action.user);
    yield put({ type: SAGA_REPO_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: SAGA_REPO_FAILURE, data: error });
  }
}

export const repos = [takeEvery(SAGA_REPO_REQUEST, getAllRepos)];
