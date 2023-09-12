import bunyan from "bunyan";

const logger = {
  devlopment: () =>
    bunyan.createLogger({
      name: "development",
      level: "debug",
    }),
  prod: () =>
    bunyan.createLogger({
      name: "production",
      level: "info",
    }),
  test: () =>
    bunyan.createLogger({
      name: "test",
      level: "fatal",
    }),
};
