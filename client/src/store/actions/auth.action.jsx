// Action type constants used by the auth reducer.
// Using constants helps avoid typos and makes actions easier to maintain.

const AUTH_ACTIONS = {
  // Sets the loading state during async operations (e.g., login/register)
  SET_LOADING: "SET_LOADING",

  // Updates form field values (e.g., email, password, username)
  HANDLE_REGISTER_CHANGE: "HANDLE_REGISTER_CHANGE",

  // Indicates a successful authentication action
  SET_SUCCESS: "SET_SUCCESS",

  // Stores error messages from failed auth operations (login/register)
  SET_ERROR: "SET_ERROR",
};

export default AUTH_ACTIONS;
