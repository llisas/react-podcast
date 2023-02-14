import {dateConverter, durationConverter} from '../../helpers/time'

describe('dateConverter', () => { 
    test("should returns a formatted date", () => {
        const date = "2022-02-14T11:00:00Z";
        expect(dateConverter(date)).toEqual("14/02/2022");
      });
 })

 describe('durationConverter', () => { 
    test('should return time from millis to hh:mm:ss', () => {
        expect(durationConverter(9698000)).toEqual('02:41:38');
      });
 })