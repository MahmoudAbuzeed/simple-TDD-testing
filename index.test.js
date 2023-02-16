
import conver from "./index";

describe("conver's test cases", () => {
  test("should be return PAHNAPLSIIGYIR", () => {
    expect(conver("PAYPALISHIRING", 3)).toBe('PAHNAPLSIIGYIR');
  });

  test("should be return PINALSIGYAHRPI", () => {
    expect(conver("PAYPALISHIRING", 4)).toBe('PINALSIGYAHRPI');
  });


  test("should be return A", () => {
    expect(conver("A",1 )).toBe('A');
  });

  test("should be return emty object", () => {
    expect(conver("",1 )).toBe('');
  });
});



