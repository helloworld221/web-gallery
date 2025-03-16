import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";

const App: React.FC = () => {
  return (
    <>
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
