import cluster from "cluster";

import os from "os";

const numCpus = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master is runnng on ${process.pid}`);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} just died`);
    cluster.fork();
  });
} else {
  //db connect part
}
