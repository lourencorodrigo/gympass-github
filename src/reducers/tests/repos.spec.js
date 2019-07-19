import { repos as reducer } from "../repos";
import {
  getAll,
  SAGA_REPO_FAILURE,
  SAGA_REPO_SUCCESS
} from "../../actions/repos";

const initialState = {
  repos: [],
  incompleteResults: false,
  loading: false,
  error: false
};

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SAGA_REPO_REQUEST", () => {
    const user = "user";
    expect(reducer([], getAll(user))).toEqual({
      loading: true
    });
  });

  it("should handle SAGA_REPO_SUCCESS", () => {
    expect(
      reducer([], {
        type: SAGA_REPO_SUCCESS,
        data: {
          incomplete_results: false,
          items: ["test"]
        }
      })
    ).toEqual({
      repos: ["test"],
      incompleteResults: false,
      loading: false
    });
  });

  it("should handle SAGA_REPO_FAILURE", () => {
    expect(
      reducer([], {
        type: SAGA_REPO_FAILURE,
        data: { error: "error test" }
      })
    ).toEqual({
      loading: false,
      error: true
    });
  });
});
