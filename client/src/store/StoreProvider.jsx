import React from "react";
import { AuthProvider } from "./context/auth.context";
import { ServiceProvider } from "./context/service.context";

const StoreProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ServiceProvider>{children}</ServiceProvider>
    </AuthProvider>
  );
};

export default StoreProvider;
