// const Router = require('koa-router');
// const a = require('../api/a');

import Router from "koa-router";
import demoController from "../api/PublicController";

const router = new Router()

router.get("/getCaptcha", demoController.getCaptcha)

export default router