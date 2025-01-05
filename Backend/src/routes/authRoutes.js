const express = require("express");
const { getAuthUrl, handleCallback } = require("../controllers/authController");
const router = express.Router();

router.get("/oauth/url", getAuthUrl);
router.get("/oauth/callback", handleCallback);

module.exports = router;
