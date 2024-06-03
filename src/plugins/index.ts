import fastify, { FastifyInstance } from 'fastify';

export default async function registerPlugins(server: FastifyInstance): Promise<void> {
  // Add your plugins here
  // Example:
  // await server.register(require('fastify-cors'));
  // await server.register(require('fastify-helmet'));
}