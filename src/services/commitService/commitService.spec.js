import mockAxios from "axios";

import { commitService } from "../";

describe("repos service", () => {
  it("should get all repos by user", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: []
      })
    );

    const user = "lourencorodrigo";
    const repo = "repository";
    const page = 0;
    await commitService.get(user, repo, page);

    const endopint =
      "https://api.github.com/repos/lourencorodrigo/repository/commits?page=0";
    expect(mockAxios.get).toHaveBeenCalledWith(endopint);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
