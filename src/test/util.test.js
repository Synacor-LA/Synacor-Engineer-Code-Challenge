import { kToFahrenheitStr, getDescriptor } from '../util';

describe('util function tests', () => {
  describe('getDescriptor tests', () => {
    it('awlays returns a valid string for full range of temperatures', () => {
      expect.assertions(100);
      const acceptable = ['balmy', 'cool', 'freezing', 'sweltering'];
      for (let i = 0; i < 100; i++) {
        const temp = Math.random() * 200 - 80;
        expect(acceptable.includes(getDescriptor(temp))).toBe(true);
      }
    });
  });

  describe('kToFahrenheitStr tests', () => {
    it('calculates kelvin-to-fahrenheit accurately', () => {
      expect.assertions(3);
      expect(kToFahrenheitStr(250)).toBe('-10');
      expect(kToFahrenheitStr(280)).toBe('44');
      expect(kToFahrenheitStr(310.29547623)).toBe('99');
    });

    it('always returns a numerical string', () => {
      expect.assertions(100);
      for (let i = 0; i < 100; i++) {
        const temp = Math.random() * 320 - 100;
        expect(/^-?\d+$/.test(kToFahrenheitStr(temp))).toBe(true);
      }
    });
  });
});
