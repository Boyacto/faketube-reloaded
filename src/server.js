import express from "express"; // babel will make to work
import morgan from "morgan";



import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";



const app = express(); // creates express application
const logger = morgan("dev")

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/", globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);

export default app;