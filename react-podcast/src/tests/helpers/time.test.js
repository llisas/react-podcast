import {dateConverter, durationConverter} from '../../helpers/time'

describe('dateConverter', () => { 
    test("should returns a formatted date 14/02/2022", () => {
        const date = "2022-02-14T11:00:00Z";
        expect(dateConverter(date)).toEqual("14/02/2022");
      });
    
      test("should returns a formatted date 28/06/2023", () => {
        const date = "2023-06-28T15:30:00Z";
        expect(dateConverter(date)).toEqual("28/06/2023");
      });   
 })

 describe('durationConverter', () => { 
    test('should return time from millis to 02:41:38', () => {
        expect(durationConverter(9698000)).toEqual('02:41:38');
      });

      test('should return time from millis to 00:32:22', () => {
        expect(durationConverter(1942000)).toEqual('00:32:22');
      });

      test('should return time from millis to 00:00:35', () => {
        expect(durationConverter(35000)).toEqual('00:00:35');
      });
      
      
 })