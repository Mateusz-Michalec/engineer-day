import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Speakers.scss";
import { images } from "../../constants";
import useInView from "../../hooks/useInView";
import { showElement } from "../../utils/animate";
import ActionBar from "../../components/ActionBar/ActionBar";
import SpeakerCard from "./SpeakersCard/SpeakerCard";

const Speakers = () => {
  // refs
  const hero = useRef<HTMLDivElement>(null);

  const createRefs = () => {
    const arrayOfRefs: React.RefObject<HTMLDivElement>[] = [];

    for (let i = 0; i < images.speakers.length; i++) {
      const ref = useRef(null);
      arrayOfRefs.push(ref);
    }

    return [hero, ...arrayOfRefs];
  };

  const [refsArray] = useState<React.RefObject<HTMLDivElement>[]>(createRefs());

  const [speakersIds] = useState<string[]>(
    images.speakers.map((speaker) => speaker.id)
  );

  const intersection = useInView(refsArray);

  const isMobile = window.innerWidth < 992 ? true : false;

  useEffect(() => {
    if (intersection.hero) showElement(hero);
    for (let i = 1; i < refsArray.length; i++)
      if (intersection[speakersIds[i - 1]]) showElement(refsArray[i]);
  }, [intersection]);

  return (
    <>
      <section className="speakers">
        <ActionBar title="Mówcy" />
        <div className="speakers__hero text-white px-4 py-5">
          <Container ref={hero} id="hero" className="hidden-opacity">
            <Row className="align-items-center gy-4">
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
        </div>
        <svg
          preserveAspectRatio={isMobile ? "xMidYMid meet" : "none"}
          className={isMobile ? "" : "svg-wave"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#4b7fd9"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,42.7C672,21,768,11,864,16C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className="speakers__cards px-4">
        <Container>
          <Row className="gy-5 justify-content-center">
            {images.speakers.map((speaker, i) => (
              <SpeakerCard
                id={speaker.id}
                ref={refsArray[i + 1]}
                name={speaker.name}
                desc={speaker.desc}
                lectures={speaker.lectures}
                link={speaker.link}
                photo={speaker?.photo}
                key={speaker.name}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Speakers;
