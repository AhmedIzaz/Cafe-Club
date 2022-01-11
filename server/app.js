import express from "express";
const app = express();
const port = process.env.PORT || 8000;
import dotenv from "dotenv";
import mongoose from "mongoose";
import mainRoutes from "./routes/mainRoutes.js";
import useMiddlewares from "./middlewares/mainMiddlewares.js";
dotenv.config();
// =========================================
// =========================================

useMiddlewares(app);
mainRoutes(app);
app.use((req, res, next) => {
  const error = new Error("invalid route!");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.json({ error: error.message });
});
// =========================================
// =========================================

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => console.log(`server is running on ${port}`));
  })
  .catch((error) => console.log(error.message));
