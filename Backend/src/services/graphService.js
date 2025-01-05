const { Client } = require("@microsoft/microsoft-graph-client");

exports.getGraphClient = (accessToken) =>
  Client.init({
    authProvider: (done) => done(null, accessToken),
  });

exports.getEmails = async (client, options = {}) => {
  const result = await client.api("/me/messages").top(50).get();
  return result.value;
};
