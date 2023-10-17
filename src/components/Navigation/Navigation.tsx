import "./Navigation.scss";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    path: "/",
    text: "Home",
    icon: "bi-house-fill",
  },
  {
    path: "/program-wydarzenia",
    text: "Program",
    icon: "bi-info-circle-fill",
  },
  {
    path: "/mapa-stoisk",
    text: "Mapa",
    icon: "bi-map-fill",
  },
  {
    path: "/prelegenci",
    text: "Mówcy",
    icon: "bi-people-fill",
  },
];
const Navigation = () => {
  const route = useLocation().pathname;

  return (
    <nav className="navigation d-flex">
      <div className="navigation__btns fs-6 d-flex w-100 justify-content-evenly">
        {routes.map((routeObj) => (
          <button key={routeObj.text} className="text-white navigation__btn">
            <Link
              to={routeObj.path}
              className="d-flex flex-column align-items-center"
            >
              <i
                className={`${
                  routeObj.path === route ? "navigation__active" : ""
                } bi d-flex fs-4 ${routeObj.icon}`}
              ></i>
              <span
                className={`${
                  routeObj.path === route ? "navigation__active" : ""
                }`}
              >
                {routeObj.text}
              </span>
            </Link>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
