import { takeEvery, put, call } from "redux-saga/effects";

import { commitService } from "../services";
import {
  SAGA_COMMITS_REQUEST,
  SAGA_COMMITS_SUCCESS,
  SAGA_COMMITS_FAILURE
} from "../actions/commits";

function* getAll(action) {
  try {
    const response = yield call(
      commitService.get,
      action.user,
      action.repos,
      action.page
    );
    yield put({ type: SAGA_COMMITS_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: SAGA_COMMITS_FAILURE, data: error });
  }
}

export const commits = [takeEvery(SAGA_COMMITS_REQUEST, getAll)];
