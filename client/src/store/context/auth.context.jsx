import { createContext, useContext, useReducer } from "react";
import initialState from "../initialstate/auth.state";
import authReducer from "../reducers/auth.reducer";
import AUTH_ACTIONS from "../actions/auth.action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../../services/api";
import { useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  // Auth state
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Handle input changes
  const handleRegister = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: AUTH_ACTIONS.HANDLE_REGISTER_CHANGE,
      payload: { name, value },
    });
  };
  // register submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
    });

    try {
      const data = await apiPost("api/auth/register", state.register);
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        dispatch({
          type: AUTH_ACTIONS.SET_SUCCESS,
        });
        dispatch({
          type: AUTH_ACTIONS.RESET_INPUTS,
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const handleLogin = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: AUTH_ACTIONS.HANDLE_LOGIN_CHANGE,
      payload: { name, value },
    });
  };

  // Login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
    });

    try {
      const data = await apiPost("api/auth/login", state.login);
      if (data.success) {
        toast.success(data.message);
        dispatch({
          type: AUTH_ACTIONS.SET_USER,
          payload: data.user,
        });
        dispatch({
          type: AUTH_ACTIONS.SET_SUCCESS,
        });
        dispatch({
          type: AUTH_ACTIONS.RESET_INPUTS,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const getUser = async () => {
    try {
      const data = await apiPost("api/auth/me", {});

      if (data.success) {
        dispatch({
          type: AUTH_ACTIONS.SET_USER,
          payload: data.user,
        });
      } else {
        dispatch({
          type: AUTH_ACTIONS.SET_USER_NULL,
        });
      }
    } finally {
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    const data = await apiPost("api/auth/logout", {});
    if (data.success) {
      toast.success(data.message);
      dispatch({
        type: AUTH_ACTIONS.SET_USER_NULL,
      });
      navigate("/login");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        handleRegister,
        handleLoginSubmit,
        handleLogin,
        handleRegisterSubmit,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use auth is not defined");
  }
  return context;
};

export default useAuth;
