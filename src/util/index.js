/**
 * Converts kelvin to fahrenheit
 * @param { number } k Temp in Kelvin
 * @returns { string } Temp in Fahrenheit
 */
export const kToFahrenheitStr = k => {
  const f = 1.8 * (k - 273.15) + 32;
  return Math.round(f).toString();
};

/** Returns an adjective to describe the temperature
 * @param { number } f The temp in Fahrenheit
 * @returns { string } A descriptor
 */
export const getDescriptor = f => {
  if (f < 32) return 'freezing';
  if (f < 60) return 'cool';
  if (f < 80) return 'balmy';
  return 'sweltering';
};
