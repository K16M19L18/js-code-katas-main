import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should return suma of number of word ', () => {
    const word = 'le1e35hy';
    const result= 36;
    const resp = sumOfIntegersInString(word);
    expect(resp).toEqual(result);
  });
  test('should return suma of number of word ', () => {
    const word = 'h3ll0w0rld1';
    const result= 4;
    const resp = sumOfIntegersInString(word);
    expect(resp).toEqual(result);
  });
  test('should return suma of number of word ', () => {
    const word = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const result= 3635;
    const resp = sumOfIntegersInString(word);
    expect(resp).toEqual(result);
  });
});
