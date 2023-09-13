import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
