import mockAxios from "axios";

import { repoService } from "../";

describe("repos service", () => {
  it("should get all repos by user", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: []
      })
    );

    const user = "lourencorodrigo";
    await repoService.getAll(user);

    const endopint =
      "https://api.github.com/search/repositories?q=user:lourencorodrigo+fork:true";
    expect(mockAxios.get).toHaveBeenCalledWith(endopint);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
