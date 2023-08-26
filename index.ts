import "reflect-metadata"
import * as express from 'express';
import { userRouter } from "./src/routes/user";
import { loginRouter } from "./src/routes/login";
import { credentialsRouter } from "./src/routes/credentials";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/credentials", credentialsRouter);

app.listen(PORT, () => {
    console.log("Server is running!");
})

