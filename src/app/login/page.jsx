import LoginPage from "@/components/Pages/LoginPage";
import React, { Suspense } from "react";

const Login = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
};

export default Login;
