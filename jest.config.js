module.exports = {
  testPathIgnorePatterns: ["<rootDir>/dist/"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
