import { getCurrentUTCTime, getRelativeTime } from "./";

describe("utils/date", () => {
  describe("getCurrentUTCTime", () => {
    it("Date should be defined", () => {
      const dateTime = getCurrentUTCTime();

      expect(dateTime).toBeDefined();
    });

    it("Date should be Date", () => {
      const dateTime = getCurrentUTCTime();
      const dateTimeObject = new Date(dateTime);

      expect(dateTimeObject).toBeInstanceOf(Date);
    });
  });

  describe("getRelativeTime", () => {
    it("Date should be defined", () => {
      const dateAsString = "2022-07-27T00:04:29.900Z";
      const dateTime = getRelativeTime(dateAsString);

      expect(dateTime).toBeDefined();
    });
  });
});
