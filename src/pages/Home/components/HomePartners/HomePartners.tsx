import React, { forwardRef } from "react";
import "./HomePartners.scss";
import { Row, Col } from "react-bootstrap";
import { images } from "../../../../constants";
import { Link } from "react-router-dom";

type PropsType = {
  id: string;
};

const HomePartners = forwardRef<HTMLDivElement, PropsType>(({ id }, ref) => {
  return (
    <section ref={ref} id={id} className="container">
      <h2 className="hidden-opacity fs-1 mb-5 fw-bold text-center">
        Współorganizatorzy
      </h2>
      <Row className="hidden-y-top home__partners gy-5">
        {images.partners.map((partner) => (
          <Col
            key={partner.name}
            xs={partner.name.length > 30 ? 12 : 6}
            className="home__partner"
          >
            <Link
              to={partner.link}
              className="d-flex flex-column align-items-center text-center"
            >
              <img
                src={partner.img}
                alt={partner.alt}
                className="home__partner-img"
              />
              <span>{partner.name}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
});

export default HomePartners;
