# Setup TS+EXPRESS Code

1. npm init
```
npm init -y
```

2. Install express and dotenv
```
npm i express dotenv
```

3. Setup Package.json to use ES6
```
type: "module"
script : {
  "dev" : "node --watch index.js"
}
```