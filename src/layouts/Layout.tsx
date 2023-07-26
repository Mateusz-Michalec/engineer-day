import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
