import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import { Outlet } from "react-router-dom";

function AppWrapperComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { AppWrapperComponent };
