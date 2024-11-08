import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    ...pluginQuery.configs.recommended,
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
      import: importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-duplicate-imports": "error",
      "no-param-reassign": [
        "error",
        {
          props: false
        }
      ],
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          enums: "always-multiline",
          generics: "only-multiline",
          functions: "never"
        }
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: [
            "return",
            "class",
            "export",
            "switch",
            "throw",
            "try",
            "while",
            "for",
            "block",
            "if"
          ]
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var", "case", "default"],
          next: "*"
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"]
        },
        {
          blankLine: "any",
          prev: ["export"],
          next: ["export"]
        }
      ],
      "react-hooks/exhaustive-deps": "warn",
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"], "internal", ["parent", "sibling"]],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@/pages/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "@/core/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "@/features/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "@/helpers/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "@/hooks/**",
              group: "internal",
              position: "after"
            },
            {
              pattern: "@/types/**",
              group: "internal",
              position: "after"
            }
          ]
        }
      ]
    }
  }
);
