const add = require("../add");
const { describe, it } = require("mocha");
describe("測試add函數", () => {
  it("測試5+5預期10", () => {
    if (add(5, 5) !== 10) {
      throw new Error("兩數相加結果不為兩數和");
    }
  });
});
