let accessToken = null; // in-memory storage

// Save access token in memory
export const setAccessToken = (token) => {
  accessToken = token;
};

// Get access token from memory
export const getAccessToken = () => accessToken;

// Clear access token (on logout or refresh failure)
export const clearAccessToken = () => {
  accessToken = null;
};