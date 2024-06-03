# My Fastify API

This is a RESTful API server built using TypeScript and Fastify. It provides a scalable and efficient framework for building web applications.

## Project Structure

```
my-fastify-api
├── src
│   ├── index.ts
│   ├── plugins
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── test
│   └── index.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Files

### `src/index.ts`

This file is the entry point of the application. It creates an instance of the Fastify server, sets up plugins, and registers routes.

### `src/plugins/index.ts`

This file exports a function `registerPlugins` which sets up and registers plugins for the Fastify index.

### `src/routes/index.ts`

This file exports a function `registerRoutes` which sets up and registers routes for the Fastify index.

### `src/types/index.ts`

This file exports interfaces and types used in the project.

### `test/index.test.ts`

This file contains Jest tests for the index. It tests the routes and server functionality.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### `jest.config.js`

This file is the configuration file for Jest. It specifies the testing framework options and setup.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Build the project using `npm run build`.
4. Start the server using `npm start`.

## Testing

Run the tests using `npm test`.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](./LICENSE) file for details.