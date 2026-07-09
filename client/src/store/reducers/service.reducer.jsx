const serviceReducer = (state, action) => {
  switch (action.type) {
    case "SERVICE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CREATE_SERVICE_SUCCESS":
      return {
        ...state,
        loading: false,
        services: [action.payload, ...state.services],
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
