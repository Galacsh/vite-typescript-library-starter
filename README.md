# Vite Typescript Library Starter

Starter that uses [Vite](https://vitejs.dev/) to build a Typescript library. It also includes Vitest, Eslint, Prettier, Husky, Lint-staged.

## Usage

1. **Clone** or **Use this template** to create your own repository.
2. Replace the `package.json` to this code below and change `@YOUR_SCOPE`, `LIB_NAME`, `DESCRIPTION`, `YOUR_NAME`, `REPOSITORY` to your own.

```json
{
  "private": true,
  "name": "@YOUR_SCOPE/LIB_NAME",
  "description": "DESCRIPTION",
  "version": "0.0.1",
  "author": "YOUR_NAME",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_NAME/REPOSITORY.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_NAME/REPOSITORY/issues"
  },
  "keywords": ["vite", "typescript"],
  "scripts": {
    "dev": "vite",
    "test": "vitest",
    "test:once": "vitest run",
    "build:only": "tsc && vite build",
    "build": "npm run test:once && npm run build:only",
    "lint": "eslint --fix . && prettier --write .",
    "prepare": "husky install"
  },
  "type": "module",
  "main": "./dist/LIB_NAME.umd.cjs",
  "module": "./dist/LIB_NAME.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "exports": {
    ".": {
      "import": "./dist/LIB_NAME.js",
      "require": "./dist/LIB_NAME.umd.cjs"
    }
  },
  "lint-staged": {
    "*.{js,ts}": "eslint --fix",
    "*.{js,ts,md}": "prettier --write"
  },
  "devDependencies": {
    "@types/node": "^20.8.2",
    "@typescript-eslint/eslint-plugin": "^6.7.4",
    "@typescript-eslint/parser": "^6.7.4",
    "eslint": "^8.51.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "3.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "vite-plugin-dts": "^3.6.0",
    "vitest": "^0.34.6"
  }
}
```

## Reference

https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/
