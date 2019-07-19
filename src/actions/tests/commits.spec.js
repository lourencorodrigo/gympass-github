import { getAll, SAGA_COMMITS_REQUEST } from "../commits";

describe("commits actions", () => {
  it("should create getAll action", () => {
    const user = "user";
    const repos = "repos";
    const page = 0;
    const expectedAction = {
      type: SAGA_COMMITS_REQUEST,
      user,
      repos,
      page
    };
    expect(getAll(user, repos, page)).toEqual(expectedAction);
  });
});
