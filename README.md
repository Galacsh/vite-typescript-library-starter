https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/

Use this `package.json`

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
    "build:only": "tsc && vite build",
    "test": "vitest"
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
  "devDependencies": {
    "@types/node": "^20.8.2",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "vite-plugin-dts": "^3.6.0",
    "vitest": "^0.34.6"
  }
}
```
