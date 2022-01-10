import express from "express";
import cors from "cors";

const middlewares = [
  cors(),
  express.urlencoded({ extended: true }),
  express.json(),
];

const useMiddlewares = (app) => {
  middlewares.forEach((middleware) => app.use(middleware));
};

export default useMiddlewares;
