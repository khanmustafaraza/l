const initialState = {
  register: {
    name: "",
    email: "",
    password: "",
  },
  login: {
    email: "",
    password: "",
  },
  user: null,
  token: "",
  loading: false,
  // authChecked: false,

  message: "",
  errorMessage: "",
};

export default initialState;
