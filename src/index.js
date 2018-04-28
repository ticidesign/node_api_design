import http from "http";
import { createServer } from "http";
import app from "./server";

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
