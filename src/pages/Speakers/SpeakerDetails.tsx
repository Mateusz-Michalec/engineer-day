import { useEffect, useRef } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { images } from "../../constants";
import "./SpeakerDetails.scss";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import { showGroupElements } from "../../utils/animate";

const SpeakerDetails = () => {
  // refs

  const speaker = useRef<HTMLSpanElement>(null);

  const intersection = useInView([speaker]);

  useEffect(() => {
    if (intersection.speaker) showGroupElements(speaker);
  }, [intersection]);

  return (
    <article className="speaker-details px-4 pb-4">
      <Container>
        <Link to="/speakers">
          <Button variant="outline-dark fs-5 my-5">
            <i className="bi bi-arrow-left-circle"></i> <span>Powrót</span>
          </Button>
        </Link>
        <header>
          <Stack gap={4} ref={speaker} id="speaker">
            <img
              className="hidden-opacity speaker-details__img mx-auto d-block shadow-lg p-3 rounded"
              src={images.female_avatar}
              alt=""
            />
            <div className="hidden-x-left">
              <h1>Anna Kowalska</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente pariatur eaque provident placeat veniam aliquid numquam
                dolorum possimus, reiciendis totam?
              </p>
            </div>
            <div className="hidden-y-top">
              <h4>Plan wykładów:</h4>
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus, sit.
                </li>
              </ul>
            </div>
          </Stack>
        </header>
      </Container>
    </article>
  );
};

export default SpeakerDetails;
