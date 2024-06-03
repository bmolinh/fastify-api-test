import { FastifyInstance } from "fastify";
import { start } from "../src";
import LightMyRequest from "light-my-request";

describe("Given the server is running", () => {
  let server: FastifyInstance;

  beforeAll(async () => {
    server = await start();
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  describe("When a GET request is made to the root path", () => {
    let response: LightMyRequest.Response;

    beforeAll(async () => {
      response = await server.inject({
        method: "GET",
        url: "/",
      });
    });

    it("Then it should respond with a status code of 200", () => {
      expect(response.statusCode).toEqual(200);
    });

    it("And it should respond with a payload of 'Hello, World!'", () => {
      expect(response.payload).toEqual("Hello, World!");
    });
  });

  describe("When a GET request is made to an undefined route", () => {
    let response: LightMyRequest.Response;

    beforeAll(async () => {
      response = await server.inject({
        method: "GET",
        url: "/undefined-route",
      });
    });

    it("Then it should respond with a status code of 404", () => {
      expect(response.statusCode).toEqual(404);
    });

    it("And it should respond with a message of 'Route not found'", () => {
      expect(response.json()).toEqual({ message: "Route not found" });
    });
  });

  describe("When a request triggers a server error", () => {
    let response: LightMyRequest.Response;

    beforeAll(async () => {
      // Assuming /error-route triggers a server error
      response = await server.inject({
        method: "GET",
        url: "/error-route",
      });
    });

    it("Then it should respond with a status code of 500", () => {
      expect(response.statusCode).toEqual(500);
    });

    it("And it should respond with a message of 'Internal Server Error'", () => {
      expect(response.json()).toEqual({ message: "Internal Server Error" });
    });
  });

  describe("When a POST request is made to /user with valid data", () => {
    let response: LightMyRequest.Response;

    beforeAll(async () => {
      response = await server.inject({
        method: "POST",
        url: "/user",
        payload: {
          name: "John Doe",
          email: "john.doe@example.com",
        },
      });
    });

    it("Then it should respond with a status code of 200", () => {
      expect(response.statusCode).toEqual(200);
    });

    it("And it should respond with a message of 'User created'", () => {
      expect(response.json()).toEqual({ message: "User created" });
    });
  });

  describe("When a POST request is made to /user with invalid data", () => {
    let response: LightMyRequest.Response;

    beforeAll(async () => {
      response = await server.inject({
        method: "POST",
        url: "/user",
        payload: {
          name: "John Doe",
          email: "invalid email",
        },
      });
    });

    it("Then it should respond with a status code of 400", () => {
      expect(response.statusCode).toEqual(400);
    });

    it("And it should respond with a message of 'Validation Error'", () => {
      expect(response.json().message).toEqual("Validation Error");
    });
  });
});
