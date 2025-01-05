const { getGraphClient, getEmails } = require("./graphService");
const { saveEmailsToElastic } = require("../utils/elasticUtils");

exports.syncEmails = async (accessToken, userId) => {
  const client = getGraphClient(accessToken);
  const emails = await getEmails(client);

  // Index emails into Elasticsearch for the given user
  await saveEmailsToElastic(userId, emails);
};
