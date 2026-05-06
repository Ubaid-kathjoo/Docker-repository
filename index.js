
import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;
import testroutes from "./src/routes/test.routes.js";
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err,"in mongo connection"));

app.use(express.json());
app.use("/", testroutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
