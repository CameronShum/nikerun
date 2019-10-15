const { buildClient } = require("./client");

class ActivityService {
  constructor(token) {
    this.client = buildClient(token);
  }

  async getRecent(limit = 2, time = 0) {
    // const time = new Date().getTime() - 24 * 60 * 60 * 1000;
    const { data } = await this.client.get(
      `/sport/v3/me/activities/after_time/${time}`,
      {
        params: { limit, metrics: "latitude,longitude" }
      }
    );
    return data;
  }
}

module.exports = { ActivityService };
