import http from "http";
import { createServer } from "http";
import app from "./server";

const server = http.createServer(app);
