import express from "express";
import cors from "cors";
import mainRouter from "./routes";
import userRouter from "./routes/user";


const app = express();

app.use("/api/v1", mainRouter);
app.use("/api/v1", userRouter);
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Backend running with Bun 🚀");
});

const PORT = Bun.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});