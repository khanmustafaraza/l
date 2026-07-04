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

    // Set loading state
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    // Success state (store user/token/message)
    case AUTH_ACTIONS.SET_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload?.user || state.user,
        token: action.payload?.token || state.token,
        success: action.payload?.message || "Success",
        error: null,
      };

    // Error state
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };

    default:
      return state;
  }
};

export default authReducer;
