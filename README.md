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

### 5. Setup Database and Prisma

- Comman will create a file : prisma/schema.prisma
- Additionaly create file (id needed): prisma/seed.ts
```
npm install primsa
npx prisma init   
```

- Generate Client

```
npm i @prisma/client 
npx prisma generate
```

- Setup Prisma client in path: src/config/prisma.ts
```
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
```

- Configure your schema, and migrate
```
npx prisma migrate dev --name change-name-as-per-user
```
-  seed your database with the initial data (if needed)
```
npx prisma db seed
```

- Open Prisma Studio to inspect your data
```
npx prisma studio
```
