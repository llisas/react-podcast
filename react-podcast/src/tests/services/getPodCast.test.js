import { getPodCasts } from "../../services/getPodCast";

describe("getPodCast", () => {
  test("should return data from the api", async () => {
    const podcast = await getPodCasts();
    expect(podcast).toBeInstanceOf(Array);
  });
});
