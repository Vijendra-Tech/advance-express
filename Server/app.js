// const expess = require("express")
// const cookieParser = require("cookie-parser")
// const session = require("express-session")

import express from "express";
import cookieParser from "cookie-parser";
// import session from "express-session";
import compression from "compression";

import { auth } from "./lib/auth";

const app = express();

app.use(cookieParser());
app.use(auth.initlialize);
app.use(auth.session);
app.use(auth.setUser());
app.use(compression());
