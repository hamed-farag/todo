module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@configs(.*)$": "<rootDir>/src/configs$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@i18n(.*)$": "<rootDir>/src/i18n$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
