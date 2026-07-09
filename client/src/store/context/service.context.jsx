import React, { createContext, useReducer } from "react";
import initialState from "../initialstate/service.state";
import serviceReducer from "../reducer/service.reducer";
import { apiGet, apiPost, apiPut, apiDelete } from "../../services/api";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(serviceReducer, initialState);

  // Create Service
  const createService = async (serviceData) => {
    try {
      dispatch({
        type: "SERVICE_REQUEST",
      });

      const response = await apiPost("/api/services", serviceData);

      dispatch({
        type: "CREATE_SERVICE_SUCCESS",
        payload: response.data.service,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: "SERVICE_FAIL",
        payload: error.response?.data || error.message,
      });

      throw error;
    }
  };

  // Get All Services
  const getServices = async () => {
    try {
      dispatch({
        type: "SERVICE_REQUEST",
      });

      const response = await apiGet("/api/services");

      dispatch({
        type: "GET_SERVICES_SUCCESS",
        payload: response.data.services,
      });
    } catch (error) {
      dispatch({
        type: "SERVICE_FAIL",
        payload: error.response?.data || error.message,
      });

      throw error;
    }
  };

  // Get Single Service
  const getServiceById = async (id) => {
    try {
      dispatch({
        type: "SERVICE_REQUEST",
      });

      const response = await apiGet(`/api/services/${id}`);

      dispatch({
        type: "GET_SERVICE_SUCCESS",
        payload: response.data.service,
      });

      return response.data.service;
    } catch (error) {
      dispatch({
        type: "SERVICE_FAIL",
        payload: error.response?.data || error.message,
      });

      throw error;
    }
  };

  // Update Service
  const updateService = async (id, data) => {
    try {
      dispatch({
        type: "SERVICE_REQUEST",
      });

      const response = await apiPut(`/api/services/${id}`, data);

      dispatch({
        type: "UPDATE_SERVICE_SUCCESS",
        payload: response.data.service,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: "SERVICE_FAIL",
        payload: error.response?.data || error.message,
      });

      throw error;
    }
  };

  // Delete Service
  const deleteService = async (id) => {
    try {
      dispatch({
        type: "SERVICE_REQUEST",
      });

      await apiDelete(`/api/services/${id}`);

      dispatch({
        type: "DELETE_SERVICE_SUCCESS",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "SERVICE_FAIL",
        payload: error.response?.data || error.message,
      });

      throw error;
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        ...state,

        createService,
        getServices,
        getServiceById,
        updateService,
        deleteService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceContext;
