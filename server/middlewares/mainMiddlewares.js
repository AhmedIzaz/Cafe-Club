import express from "express";
import cors from "cors";

const middlewares = [
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  }),

  express.json({ limit: "20mb" }),
  express.urlencoded({ extended: true, limit: "20mb" }),
];

const useMiddlewares = (app) => {
  middlewares.map((middleware) => app.use(middleware));
};

export default useMiddlewares;
