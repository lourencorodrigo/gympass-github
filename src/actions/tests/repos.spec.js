import { getAll, SAGA_REPO_REQUEST } from "../repos";

describe("repos actions", () => {
  it("should create getAll action", () => {
    const user = "user";
    const expectedAction = {
      type: SAGA_REPO_REQUEST,
      user
    };
    expect(getAll(user)).toEqual(expectedAction);
  });
});
