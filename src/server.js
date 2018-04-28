import express from "express";

// Declare an app from express
const app = express();

// setup basic routing for index route
app.get("/", (req, res) => {
  res.json({ ok: true });
});

export default app;
