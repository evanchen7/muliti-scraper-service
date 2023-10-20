import test from "../jobs/test.js";

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    console.log(fastify.config)
    await test(fastify.agenda)
    return { root: true }
  })
}
