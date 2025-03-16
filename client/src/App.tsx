import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";

const Login = lazy(() => import("./components/Auth/Login"));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
