import { createContext, useContext, useReducer } from "react";
import initialState from "../initialstate/auth.state";
import authReducer from "../reducers/auth.reducer";
import AUTH_ACTIONS from "../actions/auth.action";
import { registerService } from "../services/auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

  // Login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // TODO: login logic here
  };

  // Register submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: AUTH_ACTIONS.SET_LOADING,
      payload: true,
    });

    // console.log(state.register);
    try {
      const data = await registerService(state.register);
      // console.log(data);
      if (data.success) {
        toast.success(data.message);
        // navigate("/login");
      }
      // toast.success(data.message);
      // toast("data");

      dispatch({
        type: AUTH_ACTIONS.SET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      dispatch({
        type: AUTH_ACTIONS.SET_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: AUTH_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleRegister,
        handleLoginSubmit,
        handleRegisterSubmit,
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
