module.exports = {
  extends: ["next", "turbo", "prettier", "eslint:recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    quotes: ["warn", "double"],
    "import/newline-after-import": ["warn", { count: 1 }],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        groups: [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type",
        ],
      },
    ],
  },
};
