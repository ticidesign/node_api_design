import express from "express";

// Declare an app from express
const app = express();

// setup basic routing for index route
app.all("*", (req, res) => {
  res.json({ ok: false });
});

export default app;
