import { FastifyInstance, FastifyError } from "fastify";

export default function registerRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    reply.send("Hello, World!");
  });

  fastify.get("/error-route", async (request, reply) => {
    throw new Error("Server error");
  });

  fastify.post(
    "/user",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "email"],
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
          },
        },
      },
    },
    async (request, reply) => {
      // Handle the request here
      reply.send({ message: "User created" });
    }
  );

  // Add more routes here

  // 404 route
  fastify.setNotFoundHandler((request, reply) => {
    reply.code(404).send({ message: "Route not found" });
  });

  // Error handler
  fastify.setErrorHandler((error: FastifyError, request, reply) => {
    // Check if the error is a validation error
    if (error.validation) {
      reply.status(400).send({
        message: "Validation Error",
        errors: error.validation, // This is an array of validation errors
      });
    } else {
      console.error(error); // Log the error
      reply.status(500).send({ message: "Internal Server Error" });
    }
  });
}
