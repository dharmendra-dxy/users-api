# Setup TS+EXPRESS Code

### 1. npm init

```
npm init -y
```

### 2. Install express and dotenv

```
npm i express dotenv
```

install TS and dev dependencies
```
npm install -D typescript ts-node @types/node
```

create tsconfig.json
```
npx tsc --init
```

tsconfig.json file
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### 3. Setup Package.json to use ES6

```
type: "module"
script : {
  "dev" : "node --watch src/server.ts" or "nodemon src/server.ts",
  "build" : "tsc",
  "start": "node dist/server.js"
}
```

### 4. Setup Eslint and prettier

```
npm install eslint @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier -D
```

Add following files

- eslint.config.mjs
- .prettierrc
- .prettierignore

Add following scripts

```
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"format": "prettier --write .",
"format:check": "prettier --check .",
```


npm i @prisma/client 