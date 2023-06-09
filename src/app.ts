import "express-async-errors";
import express, { Application } from "express";
import handleError from "./errors/handleErrors";
import loginRouters from "./routes/login.routes";
import userRouters from "./routes/user.routes";
import categoriesRoutes from "./routes/category.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import scheduleRoutes from "./routes/schedule.routes";

const app: Application = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/login", loginRouters);
app.use("/users", userRouters);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);

app.use(handleError);
export default app;
