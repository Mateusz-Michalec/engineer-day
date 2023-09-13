import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation d-flex">
      <i className="display-4 top-50 translate-middle d-none text-white d-lg-block bi bi-chevron-double-right position-absolute"></i>
      <div className="navigation__btns fs-6 d-flex w-100 flex-lg-column justify-content-evenly">
        <button className="text-white navigation__btn">
          <Link to="/" className="d-flex flex-column align-items-center">
            <i className="bi fs-4 bi-house-fill"></i>
            <span>Home</span>
          </Link>
        </button>
        <button className="text-white navigation__btn">
          <Link to="map" className="d-flex flex-column align-items-center">
            <i className="bi fs-4 bi-map-fill"></i>
            <span>Mapa</span>
          </Link>
        </button>
        <button className="text-white navigation__btn">
          <Link to="speakers" className="d-flex flex-column align-items-center">
            <i className="bi fs-4 bi-people-fill"></i>
            <span>Mówcy</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
