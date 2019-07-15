const Koa = require("koa");
const dotenv = require("dotenv");

// Load environment variables from the .env file in the local directory.
dotenv.config();

// Load router containing all routes.
const { router } = require("./routes");

// Create Koa app.
const app = new Koa();

// Catch all errors.
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = err.message;
    console.error(err);
  }
});

// Add routes.
app.use(router.routes());
app.use(router.allowedMethods());

// Listen for incoming requests.
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}...`);
