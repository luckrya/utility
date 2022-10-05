// https://jestjs.io/docs/configuration

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text"],
  coverageDirectory: "coverage",

  rootDir: __dirname,
  testMatch: ["<rootDir>/src/__tests__/**/*.spec.ts"],
};
