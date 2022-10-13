/**
 * @reference https://jestjs.io/docs/configuration
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  preset: "ts-jest",

  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text"],
  coverageDirectory: "coverage",

  testMatch: ["<rootDir>/src/__tests__/**/*.spec.ts"],

  // setupFiles: ["<rootDir>/setup/index.ts"],
  // rootDir: "src/__tests__",
};
