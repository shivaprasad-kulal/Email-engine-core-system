const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "https://192.168.1.106:9200/" });

exports.getEmailsFromElastic = async (userId) => {
  const index = `email_messages_${userId}`;
  const { body } = await client.search({
    index,
    body: {
      query: {
        match_all: {},
      },
    },
  });

  return body.hits.hits.map((hit) => hit._source);
};
