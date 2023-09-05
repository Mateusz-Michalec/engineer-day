import React, { forwardRef } from "react";
import "./HomePartners.scss";
import { Stack } from "react-bootstrap";

type PropsType = {
  id: string;
};

const HomePartners = forwardRef<HTMLDivElement, PropsType>(({ id }, ref) => {
  return (
    <section ref={ref} id={id} className="container">
      <h2 className="hidden-opacity fs-1 mb-5 fw-bold text-center">
        Współorganizatorzy
      </h2>
      <Stack
        direction="horizontal"
        className="hidden-y-top no-wrap home__partners justify-content-center"
      >
        <i className="bi bi-facebook" />
        <i className="bi bi-twitch" />
        <i className="bi bi-twitter" />
        <i className="bi bi-youtube" />
        <i className="bi bi-facebook" />
        <i className="bi bi-twitch" />
        <i className="bi bi-twitter" />
        <i className="bi bi-youtube" />
      </Stack>
    </section>
  );
});

export default HomePartners;
