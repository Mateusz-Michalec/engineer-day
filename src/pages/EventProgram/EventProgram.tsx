import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./EventProgram.scss";
import { images } from "../../constants";
import useInView from "../../hooks/useInView";
import { showGroupElements } from "../../utils/animate";

const EventProgram = () => {
  const eventProgram = useRef<HTMLDivElement>(null);

  const intersection = useInView([eventProgram]);

  useEffect(() => {
    if (intersection.eventProgram) showGroupElements(eventProgram);
  }, [intersection]);

  return (
    <Container>
      <section id="eventProgram" ref={eventProgram} className="event-program">
        <header className="hidden-x-left">
          <h1 className="text-center fs-1 mb-5 fw-bold">
            Szczegółowy program wydarzenia
          </h1>
        </header>
        <img
          className="img-fluid mx-auto d-block hidden-x-right"
          src={images.eventProgram}
          alt="Szczegółowy program wydarzenia"
        />
      </section>
    </Container>
  );
};

export default EventProgram;
