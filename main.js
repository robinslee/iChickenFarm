"use strict";

const Koa = require("koa");
const serve = require("koa-static");
const logger = require("koa-logger");
const app = new Koa();

/*
    app.env
    app.proxy
    app.subdomainOffset
*/

app.use(async (ctx, next) => {
    /*
    ctx;
    ctx.request;
    ctx.response;
    */
    
    // ctx.body = "Hello world";
    // console.log(`${new Date()}: ${ctx.url} completed.`);
    await next();
});

app.use(logger());
app.use(serve(__dirname + "/src/icf"), { defer: false });

app.on("error", (err, ctx) => {
    console.log(err);
});

app.listen(3000);

console.log("Listening on port 3000");