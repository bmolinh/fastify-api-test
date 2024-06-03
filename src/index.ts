import fastify from "fastify";
import registerPlugins from "./plugins";
import registerRoutes from "./routes";

const server = fastify();

// Register plugins
registerPlugins(server);

// Register routes
registerRoutes(server);

export const start = async () => {
  try {
    await server.listen(3000);
    console.log("Server is running on port 3000");
    return server;
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();
