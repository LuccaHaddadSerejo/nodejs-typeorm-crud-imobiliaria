import "express-async-errors";
import express, { Application } from "express";
import handleError from "./errors/handleErrors";
import loginRouters from "./routes/login.routes";
import userRouters from "./routes/user.routes";

const app: Application = express();
app.use(express.json());

app.use("/login", loginRouters);
app.use("/users", userRouters);

app.use(handleError);
export default app;
