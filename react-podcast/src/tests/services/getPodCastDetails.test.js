import { getPodCastDetails } from "../../services/getPodCastDetails";
import {mockId} from '../mocks/index'
describe("getPodCast", () => {
  test("should return data from the api", async () => {
    const mockId ='1535809341';
    const podcast = await getPodCastDetails(mockId);
    expect(podcast).toBeInstanceOf(Array);
  });
});
