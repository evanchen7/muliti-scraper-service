import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";

const schema = {
  type: "object",
  required: ["DB_USER", "DB_PASS", "DB_NAME", "DB_PORT"],
  properties: {
    DB_USER: {
      type: "string",
    },
    DB_PASS: {
      type: "string",
    },
    DB_NAME: {
      type: "string",
    },
    DB_PORT: {
      type: "string",
    },
  },
};
const options = {confKey: "config", schema: schema, dotenv: true, data: process.env};

export default fp(async (fastify, opts) => {
  fastify.register(fastifyEnv, Object.assign(options, opts));
  await fastify.after();
});
