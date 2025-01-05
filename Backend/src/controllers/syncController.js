const { syncEmails } = require("../services/syncService");

exports.syncEmails = async (req, res) => {
  const { userId, accessToken } = req.body; // The userId and access token are sent in the body of the request

  try {
    // Sync the emails from Outlook to Elasticsearch
    await syncEmails(accessToken, userId);
    res.status(200).send({ message: "Email sync initiated" });
  } catch (error) {
    console.error("Error syncing emails:", error);
    res.status(500).send({ error: "Failed to sync emails" });
  }
};

exports.syncStatus = async (req, res) => {
  // This route could be used to get sync status (like how many emails have been synced)
  // For simplicity, we return a mock status
  res.status(200).send({ status: "Sync in progress..." });
};
