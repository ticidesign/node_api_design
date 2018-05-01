import express from "express";
import { restRouter } from "./api";

const app = express();

//Mount the restRouter on the API router
app.use("/api", restRouter);

app.get("/", (req, res) => res.json({ first: true }));
app.all("*", (req, res) => {
  res.json({ ok: false });
});

export default app;
