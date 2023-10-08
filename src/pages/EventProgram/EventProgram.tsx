import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { images } from "../../constants";
import useInView from "../../hooks/useInView";
import { showElement } from "../../utils/animate";
import ActionBar from "../../components/ActionBar/ActionBar";

const EventProgram = () => {
  const eventProgram = useRef<HTMLImageElement>(null);

  const intersection = useInView([eventProgram]);

  useEffect(() => {
    if (intersection.eventProgram) showElement(eventProgram);
  }, [intersection]);

  return (
    <section className="event-program pt-5">
      <ActionBar title="Szczegółowy program wydarzenia" />
      <Container>
        <img
          id="eventProgram"
          ref={eventProgram}
          className="mx-auto d-block img-fluid hidden-x-right"
          src={images.eventProgram}
          alt="Szczegółowy program wydarzenia"
        />
      </Container>
    </section>
  );
};

export default EventProgram;
