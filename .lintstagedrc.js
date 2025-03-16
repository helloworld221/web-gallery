module.exports = {
  "client/src/**/*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "server/src/**/*.ts": ["eslint --fix", "prettier --write"],
  "**/*.{json,md}": ["prettier --write"],
};
