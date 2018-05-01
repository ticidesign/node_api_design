import express from "express";

const app = express();

// //Declare a separate router
// const apiRouter = express.Router();
// apiRouter.get("/", (req, res) => res.json({ api: true }));
// apiRouter.all("*", (req, res) => res.json({ apiAll: true }));

// //Mount new router to app
// app.use("/api", apiRouter);

app.get("/", (req, res) => res.json({ first: true }));
app.all("*", (req, res) => {
  res.json({ ok: false });
});

export default app;
