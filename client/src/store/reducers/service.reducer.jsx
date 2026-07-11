import SERVICE_ACTION from "../actions/service.action";

const serviceReducer = (state, action) => {
  switch (action.type) {
    case SERVICE_ACTION.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case "HANDLE_SERVICE_CHANGE":
      return {
        ...state,
        service: {
          ...state.service,
          [action.payload.name]: action.payload.value,
        },
      };

    case "GET_SERVICES_SUCCESS":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case "GET_SERVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case "UPDATE_SERVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        services: state.services.map((item) =>
          item._id === action.payload._id ? action.payload : item,
        ),
      };

    case "DELETE_SERVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        services: state.services.filter((item) => item._id !== action.payload),
      };

    case "SERVICE_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default serviceReducer;
