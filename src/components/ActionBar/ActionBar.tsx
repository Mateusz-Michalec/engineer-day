import React from "react";
import { useNavigate } from "react-router-dom";
import "./ActionBar.scss";

const ActionBar = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <header className="action-bar position-fixed text-white px-3 w-100 d-flex align-items-center gap-5">
      <button type="button" onClick={() => navigate(-1)}>
        <i className="bi text-white fs-1 bi-arrow-left"></i>
      </button>
      <h1 className="fs-5 fw-bold mb-0">{title}</h1>
    </header>
  );
};

export default ActionBar;
