import "./config/environment/env.config";
import Express from "express";
import connectDB from "./config/db/db.config";
import { ExampleRouter } from "./routers/Example/example.routes";

const App = Express();

App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());

App.use(ExampleRouter);

connectDB();
App.listen(process.env.SERVER_PORT, () =>
  console.log(`Listning on port: ${process.env.SERVER_PORT}`)
);
