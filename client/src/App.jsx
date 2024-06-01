import React from "react";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

const App = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/register"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);
  return (
    <>
      <ToastContainer />
      {!shouldHideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
