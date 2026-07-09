// Action type constants used by the auth reducer.
// Using constants helps avoid typos and makes actions easier to maintain.

const AUTH_ACTIONS = {
  // Sets the loading state during async operations (e.g., login/register)
  SET_LOADING: "SET_LOADING",
  SET_AUTH_CHECKED: "SET_AUTH_CHECKED",

  // Updates form field values (e.g., email, password, username)
  HANDLE_REGISTER_CHANGE: "HANDLE_REGISTER_CHANGE",
  HANDLE_LOGIN_CHANGE: "HANDLE_LOGIN_CHANGE",

  // Indicates a successful authentication action
  SET_SUCCESS: "SET_SUCCESS",
  SET_USER: "SET_USER",
  SET_USER_NULL: "SET_USER_NULL",

  // Stores error messages from failed auth operations (login/register)
  RESET_INPUTS: "RESET_INPUTS",
};

export default AUTH_ACTIONS;
