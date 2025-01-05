const { getEmailsFromElastic } = require("../services/emailService");

exports.getEmails = async (req, res) => {
  const { userId } = req.params; // userId is passed in the URL

  try {
    // Retrieve emails from Elasticsearch for the specific user
    const emails = await getEmailsFromElastic(userId);
    res.status(200).send({ emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).send({ error: "Failed to retrieve emails" });
  }
};
