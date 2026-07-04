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
  message: "",
  errorMessage: "",
};

export default initialState;
