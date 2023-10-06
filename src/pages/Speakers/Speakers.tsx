import { useEffect, useRef } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./Speakers.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import { showElement } from "../../utils/animate";

const Speakers = () => {
  // refs
  const hero = useRef<HTMLDivElement>(null);

  const intersection = useInView([hero]);

  const isMobile = window.innerWidth < 992 ? true : false;

  useEffect(() => {
    if (intersection.hero) showElement(hero);
  }, [intersection]);

  return (
    <div className="speakers">
      <section>
        <header className="speakers__hero text-white p-4">
          <Container ref={hero} id="hero" className="hidden-opacity">
            <Row className="g-5 align-items-center">
              <Col xs={12} md={6}>
                <img
                  className="speakers__hero-img"
                  src={images.speakers_hero}
                  alt="Mówca"
                />
              </Col>
              <Col xs={12} md={6}>
                <h1 className="fw-bold">Prelegaci</h1>
                <p className="mb-0">
                  Poznaj mówców, którzy będą dzielić się swoją wiedzą i
                  doświadczeniem podczas Radomskiego Dnia Inżyniera.{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </header>
        <svg
          preserveAspectRatio={isMobile ? "xMidYMid meet" : "none"}
          className={isMobile ? "" : "svg-wave"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#6c63ff"
            fill-opacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,42.7C672,21,768,11,864,16C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className="speakers__cards px-4">
        <Container>
          <Row className="gy-5">
            <Col xs={12} className="p-4 speakers__card rounded">
              <Stack gap={3}>
                <img
                  className="speakers__card-photo"
                  src={images.female_avatar}
                  alt="Prelegant"
                />
                <header className="text-white text-center">
                  <h3 className="display-5">Anna Kowalska</h3>
                  <p className="w-75 mx-auto mb-0">
                    "Psychologiczne czynniki konstruowania kariery zawodowej"
                  </p>
                </header>
                <Link to={`/speakers/aa`} className="mx-auto">
                  <Button variant="outline-light">Dowiedz się więcej</Button>
                </Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Speakers;
