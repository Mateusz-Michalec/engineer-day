import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  // Do we want styling depending on a page?
  // type PagesType = "home" | "exhibitions" | "speakers" | "map";

  // const [currentPage, setCurrentPage] = useState("home");
  // console.log(currentPage);

  // useEffect(() => {
  //   const path = location.pathname.split("/");
  //   setCurrentPage(path[path.length - 1]);
  // }, [location.pathname]);

  return (
    <nav className="navigation shadow-lg d-flex">
      <i className="display-4 top-50 translate-middle d-none text-white d-lg-block bi bi-chevron-double-right position-absolute"></i>
      <div className="navigation__btns d-flex w-100 flex-lg-column justify-content-evenly">
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
