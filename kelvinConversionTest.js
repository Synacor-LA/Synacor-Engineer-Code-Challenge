var assert = require('assert');
function kelvinToDegrees(kelvin)
{
  try
  {
    return Math.round(
    (
      (kelvin - 273.15) * (9 / 5)
    ) + 32);
  }
  catch (error)
  {
    console.trace(error);
    return 'error:' + kelvin + 'K';
  }
}
const testCases =
[
  { input: 300, intendedOutput: 80 },
  { input: 250, intendedOutput: -10 },
  { input: 325, intendedOutput: 125 },
  { input: 50, intendedOutput: -370 },
  { input: 100, intendedOutput: -280 },
  { input: 999, intendedOutput: 1339 },
  { input: -999, intendedOutput: -2258 },
  { input: 0, intendedOutput: -460 },
  { input: -1, intendedOutput: -461 },
  { input: '50', intendedOutput: -370 },
  { input: 'some text', intendedOutput: NaN },
];
function runTests()
{
  testCases.map((testCase) =>
  {
    console.log('kelvinToDegrees() should convert Kelvin to degrees Fahrenheit.');
    console.log(
      'Expect ' + kelvinToDegrees(testCase.input)
      + ' to equal ' + testCase.intendedOutput
      + '.');
    try
    {
      assert.equal(kelvinToDegrees(testCase.input), testCase.intendedOutput);
      console.log('Passed.');
    }
    catch (error)
    {
      console.error('Failed.');
    }
  });
}
runTests();
