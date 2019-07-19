import { commits as reducer } from "../commits";
import {
  getAll,
  SAGA_COMMITS_SUCCESS,
  SAGA_COMMITS_FAILURE
} from "../../actions/commits";

const initialState = {
  commits: [],
  loading: false,
  error: false
};

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SAGA_COMMITS_REQUEST", () => {
    const user = "user";
    const repo = "repo";
    const page = 0;
    expect(reducer([], getAll(user, repo, page))).toEqual({
      loading: true
    });
  });

  it("should handle SAGA_COMMITS_SUCCESS", () => {
    expect(
      reducer([], {
        type: SAGA_COMMITS_SUCCESS,
        data: ["test"]
      })
    ).toEqual({
      commits: ["test"],
      loading: false
    });
  });

  it("should handle SAGA_COMMITS_FAILURE", () => {
    expect(
      reducer([], {
        type: SAGA_COMMITS_FAILURE,
        data: { error: "error test" }
      })
    ).toEqual({
      loading: false,
      error: true
    });
  });
});
