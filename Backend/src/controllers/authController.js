const { AuthorizationCode } = require("simple-oauth2");
const { saveUserDetailsToElastic } = require("../utils/elasticUtils");

const oauthConfig = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://login.microsoftonline.com",
    authorizePath: "/common/oauth2/v2.0/authorize",
    tokenPath: "/common/oauth2/v2.0/token",
  },
};
const oauth2 = new AuthorizationCode(oauthConfig);

exports.getAuthUrl = (req, res) => {
  const authUrl = oauth2.authorizeURL({
    redirect_uri: process.env.REDIRECT_URI,
    scope: "openid profile offline_access Mail.Read Mail.Send",
  });
  res.send({ authUrl });
};

exports.handleCallback = async (req, res) => {
  const { code } = req.query;
  try {
    const token = await oauth2.getToken({
      code,
      redirect_uri: process.env.REDIRECT_URI,
      scope: "openid profile offline_access Mail.Read Mail.Send",
    });

    // Save user and token details to Elasticsearch
    await saveUserDetailsToElastic(token.token);

    res.send({ message: "OAuth successful", token: token.token });
  } catch (error) {
    console.error("Error exchanging code:", error);
    res.status(500).send({ error: "OAuth failed" });
  }
};
