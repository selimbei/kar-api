import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
        files: ["**/*.ts", "**/*.tsx"]

        // any additional configuration for these file types here
    },
    {
        ignores: ["**/build/*", "**/node_modules/*", "**/public/*"]
    }
];