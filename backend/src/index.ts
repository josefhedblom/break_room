import "./config/environment/env.config";
import Express from "express";
import connectDB from "./config/db/db.config";
import { ExampleRouter } from "./routers/Example/example.routes";
import { UserRouter } from "./routers/users/user.routes";
import { TimeRouter } from "./routers/breaks/break.routes";
import cookieParser from "cookie-parser";

const App = Express();

App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());
App.use(cookieParser());

App.use(ExampleRouter);
App.use(UserRouter);
App.use(TimeRouter);

connectDB();
App.listen(process.env.SERVER_PORT, () =>
  console.log(`Listning on port: ${process.env.SERVER_PORT}`)
);
