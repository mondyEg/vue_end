import combineRoutes from "koa-combine-routers";
import demoRouter from "./publicRouter.js";

// const combineRoutes = require("koa-combine-routers")
// const aRoute = require("./aRouter")
// const bRoute = require("./bRouter")

export default combineRoutes(demoRouter)

