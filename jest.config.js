module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tex}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@configs(.*)$": "<rootDir>/src/configs$1",
  },
};
