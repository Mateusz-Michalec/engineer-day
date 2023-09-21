import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
