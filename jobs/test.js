export default async function test(agenda) {
  agenda.define('console log test', async job => {
    console.log(job)
  });
}

// import {Agenda} from "@hokify/agenda";
// agenda.define('console log test', async job => {
//   console.log(job)
// });
