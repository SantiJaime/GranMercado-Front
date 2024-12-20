module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "postcss.config.cjs",
    "tailwind.config.cjs",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json", "tsconfig.app.json", "tsconfig.node.json"],
  },
  plugins: ["react-refresh", "tailwindcss"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-unused-vars": "off",
    semi: ["warn", "always"],
  },
};
