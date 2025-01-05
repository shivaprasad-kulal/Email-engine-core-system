import React, { useState } from "react";
import axios from "axios";

const AddAccount = () => {
  const [authUrl, setAuthUrl] = useState("");

  const fetchAuthUrl = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/oauth/url");
      setAuthUrl(response.data.authUrl);
    } catch (error) {
      console.error("Error fetching auth URL:", error);
    }
  };

  return (
    <div>
      <h2>Link Your Account</h2>
      <button onClick={fetchAuthUrl}>Get Outlook Link</button>
      {authUrl && (
        <div>
          <p>Click the link below to link your account:</p>
          <a href={authUrl} target="_blank" rel="noopener noreferrer">
            Link Outlook Account
          </a>
        </div>
      )}
    </div>
  );
};

export default AddAccount;
