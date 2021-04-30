# typescript-basics

[Course Link](https://www.youtube.com/watch?v=LKVHFHJsiO0&t=5s)

## Setup

initialise a node repo:

```bash
yarn init
```

add typescript dependencies as dev:

```bash
yarn add typescript -D
```

```bash
yarn add ts-node -D
```

initialise typeScript

```bash
npx tsc --init
```

this creates the tsconfig.json file, which helps us configure our typeScript rules. For this I needed to modify the 'target' property from 'ES5' to at least 'ES2015' to introduce Promises.

test our our script in the console based on a package.json script we've defined:

```bash
yarn test
```

Identify the type of a variable with this very handy command:

```bash
ctrl+k ctrl+i
```

## Misconceptions

1. TypeScript only enforces types at compiletime, not at runtime.
