const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "https://192.168.1.106:9200/" });

exports.saveEmailsToElastic = async (userId, emails) => {
  const index = `email_messages_${userId}`;
  for (const email of emails.value) {
    await client.index({
      index,
      id: email.id,
      document: email,
    });
  }
};
