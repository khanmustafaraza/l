import apiPost from "../../services/api";

const registerService = (payload) => {
  return apiPost(`${VITE_API_URL}/api/auth/register`, payload);
  console.log("payload", payload);
};

const loginService = (payload) => {
  return apiPost(`${VITE_API_URL}/api/auth/login`, payload);
};

export { registerService, loginService };
