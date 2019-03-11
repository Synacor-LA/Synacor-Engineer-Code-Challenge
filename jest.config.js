module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js'],
  setupFiles: ['<rootDir>/src/test/__setup__/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['node_modules'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
