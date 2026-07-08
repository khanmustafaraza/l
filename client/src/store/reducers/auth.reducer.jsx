import AUTH_ACTIONS from "../actions/auth.action";

const authReducer = (state, action) => {
  switch (action.type) {
    // Handle form input changes (login/register)
    case AUTH_ACTIONS.HANDLE_REGISTER_CHANGE: {
      const { name, value } = action.payload;

      // Determine whether it's login or register field

      return {
        ...state,
        register: {
          ...state.register,
          [name]: value,
        },
      };
    }
    case AUTH_ACTIONS.HANDLE_LOGIN_CHANGE: {
      const { name, value } = action.payload;

      // Determine whether it's login or register field

      return {
        ...state,
        login: {
          ...state.login,
          [name]: value,
        },
      };
    }

    // Set loading state
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    // Success state (store user/token/message)
    case AUTH_ACTIONS.SET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_ACTIONS.RESET_INPUTS:
      return {
        ...state,
        register: { name: "", email: "", password: "" },
        login: { email: "", password: "" },
      };

    default:
      return state;
  }
};

export default authReducer;
