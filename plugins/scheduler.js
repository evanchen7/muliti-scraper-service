import fp from "fastify-plugin";
import {Agenda} from "@hokify/agenda";
import Agendash from "agendash";
// import Agendash from "fastify-agenda";

export default fp(async function (fastify, opts) {
  const options = {
    confKey: "scheduler",
    dotenv: true,
    data: process.env,
  };

  const dbUser = fastify.config["DB_USER"];
  const dbPass = fastify.config["DB_PASS"];
  const dbPort = fastify.config["DB_PORT"];
  // const mongoConnectionString = `mongodb://${dbUser}:${dbPass}@localhost:${dbPort}/agenda`;
  const mongoConnectionString = `mongodb://agenda:agenda@localhost:${dbPort}/agenda`;
  // const mongoConnectionString = `mongodb://mongo:27017/agenda`;
  const agenda = new Agenda({db: {address: mongoConnectionString}});
  fastify.decorate("agenda", agenda);
  fastify.register(Agendash(agenda, { middleware: 'fastify'}), { prefix: '/dash', })
  // await agenda.start();
});
