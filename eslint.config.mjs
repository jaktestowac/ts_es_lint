import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['package-lock.json'] },
  { files: ['**/*.ts' ] },
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        projectService: true,
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.url,
      },
    },
  },
);
