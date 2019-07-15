const { buildClient } = require("./client");

class ActivityService {
  constructor(token) {
    this.client = buildClient(token);
  }

  async getRecent(limit = 2) {
    const time = new Date().getTime() - 24 * 60 * 60 * 1000;
    const { data } = await this.client.get(`/activities/after_time/${time}`, {
      params: { limit }
    });
    return data;
  }
}

module.exports = { ActivityService };
