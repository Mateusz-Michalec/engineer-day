import { useEffect, useRef } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { images } from "../../constants";
import "./ExhibitionDetails.scss";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import { showGroupElements } from "../../utils/animate";

const ExhibitionDetails = () => {
  const exhibition = useRef<HTMLSpanElement>(null);

  const intersection = useInView([exhibition]);

  useEffect(() => {
    if (intersection.exhibition) showGroupElements(exhibition);
  }, [intersection]);

  return (
    <article className="exhibition-details px-4 pb-4">
      <Container>
        <Link to="/map">
          <Button variant="outline-dark fs-5 my-5">
            <i className="bi bi-arrow-left-circle"></i> <span>Powrót</span>
          </Button>
        </Link>
        <header>
          <Stack gap={4} ref={exhibition} id="exhibition">
            <img
              className="exhibition-details__img mx-auto bg-white p-3 rounded shadow-sm"
              src={images.exhibitions_logo_uth}
              alt=""
            />
            <div className="hidden-x-left">
              <h1 className="exhibition-details__title">
                Uniwersytet Technologiczno-Humanistyczny im Kazimierza
                Pułaskiego w Radomiu
              </h1>
            </div>
            <div className="hidden-y-top">
              <p className="exhibition-details__address">
                Malczewskiego 20a, 26-610 Radom
                <br />
                tel. +48 (48) 361-8000
                <br />
                e-mail: cpi@uthrad.pl
              </p>
              <p className="exhibition-details__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                placeat vitae rem earum sunt quaerat, doloremque aliquam
                inventore. Architecto fuga ex molestiae illo nemo harum tenetur
                repudiandae labore consequuntur inventore, ab dolorum reiciendis
                sed accusantium commodi ratione sequi at hic libero, et ducimus.
                Non, omnis inventore perspiciatis velit natus expedita.
              </p>
            </div>
            <Link to={"https://uniwersytetradom.pl"}>
              <Button variant="outline-dark my-2 fs-6">
                <i className="bi bi-eye"></i> <span>Zobacz stronę www!</span>
              </Button>
            </Link>
          </Stack>
        </header>
      </Container>
    </article>
  );
};

export default ExhibitionDetails;
