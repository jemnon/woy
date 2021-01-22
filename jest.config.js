module.exports = {
  collectCoverageFrom: ['<rootDir>/src/*{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/__tests__/*.test.{ts,tsx,js,jsx}'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
