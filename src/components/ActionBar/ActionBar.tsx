import React from "react";
import "./ActionBar.scss";
import { Link } from "react-router-dom";

const ActionBar = ({ title }: { title: string }) => {
  return (
    <header className="action-bar position-fixed text-white px-3 w-100 d-flex align-items-center gap-5">
      <button type="button">
        <Link to={"/"}>
          <i className="bi text-white fs-1 bi-arrow-left"></i>
        </Link>
      </button>
      <h1 className="fs-5 fw-bold mb-0">{title}</h1>
    </header>
  );
};

export default ActionBar;
