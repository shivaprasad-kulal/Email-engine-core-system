const express = require("express");
const { syncEmails, syncStatus } = require("../controllers/syncController");
const { getEmails } = require("../controllers/emailController");
const router = express.Router();

router.post("/sync", syncEmails); // Route to sync emails
router.get("/sync/status", syncStatus); // Route to check sync status
router.get("/emails/:userId", getEmails); // Route to fetch emails for a specific user

module.exports = router;
