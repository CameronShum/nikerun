const Router = require("koa-router");
const { ActivityService } = require("./nike/activities");

const router = new Router();
const activityService = new ActivityService(process.env.NIKE_RUN_TOKEN);

router.get("/recent", async (ctx, next) => {
  const activities = await activityService.getRecent();
  ctx.body = activities;
  await next();
});

module.exports = { router };
