const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.path);
  ctx.body = "hello routes";
  ctx.body += `\n path: ${ctx.path}`;
});

app.listen(3001);

console.log("app listen on port 3001");
