import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { 
    globals: {
      ...globals.browser, // Глобальные переменные браузера
      ...globals.jest,    // Глобальные переменные Jest
    },
  }},
  pluginJs.configs.recommended,
  {
    // Конфигурация для Jest
    files: ["**/*.test.js", "**/*.spec.js"], // Применять только к тестовым файлам
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // Рекомендуемые правила для Jest
    },
  },
];