import React from "react";
import LoginPage from "./components/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    // google cloud platform client id
    <GoogleOAuthProvider clientId="706887665079-mgckk8kcmj7gjv13sfd8orgi6d3j8vcr.apps.googleusercontent.com">
      <LoginPage />
    </GoogleOAuthProvider>
  );
};

export default App;
