// const koa = require('koa'
import koa from "koa";
import router from "./routes/routes";
import helmet from "koa-helmet";
import statics from "koa-static";
import path from "path";
import compose from "koa-compose"
import jsonutil from "koa-json"
import cors from "@koa/cors"
import koaBody from "koa-body"
import koaCompress from "koa-compress"

// const router = require("./routes/routes");
// const helmet = require('koa-helmet');
// const statics = require("koa-static");
// const path = require("path");
/*
使用koa-compose 打包中间件
*/
const app = new koa();

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, "../public")),
    cors(),
    jsonutil({ pretty: false, param: "pretty" }),
    helmet()
])
// if (!isDevMode) {

// }
// app.use(helmet());
// // __dirname当前目录
app.use(middleware)
app.use(router());
app.listen(2000)