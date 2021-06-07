import express from "express"; // babel will make to work
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); // creates express application
const logger = morgan("dev")

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);


const handleListening = () => console.log(`Server listening on port http//localhost:${PORT}`);

app.listen(PORT, handleListening);
//app.listen(4000, () => console.log("Server listening on port 4000") ); does the same thing
