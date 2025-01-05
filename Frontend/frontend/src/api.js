import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000, // Set appropriate timeout
});

export const fetchAuthUrl = async () => {
  const response = await api.get("/oauth/url");
  return response.data.authUrl;
};

export const fetchSyncStatus = async () => {
  const response = await api.get("/sync/status");
  return response.data.status;
};

export const fetchEmails = async (userId) => {
  const response = await api.get(`/emails/${userId}`);
  return response.data.emails;
};
