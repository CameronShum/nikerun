const { create } = require("axios");

function buildClient(token) {
  const client = create({ baseURL: "https://api.nike.com/plus/v3" });
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  return client;
}

module.exports = { buildClient };
