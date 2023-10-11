import { forwardRef, useRef, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { type Speaker } from "../../../constants/images";
import "./SpeakersCard.scss";

const SpeakerCard = forwardRef<HTMLDivElement, Speaker>(
  ({ id, desc, link, lectures, name, photo }, ref) => {
    const descRef = useRef<HTMLParagraphElement>(null);

    const [isShortDescription, setIsShortDescription] = useState<boolean>(
      desc.length > 160 ? true : false
    );

    return (
      <Col
        xs={12}
        lg={9}
        ref={ref}
        id={id}
        className="p-4 speakers__card rounded hidden-x-right"
      >
        {typeof photo === "string" ? (
          <img
            className={`speakers__card-photo ${
              photo.includes("png") ? "speakers__card-photo--contain" : ""
            }`}
            src={photo}
            alt={name}
          />
        ) : (
          <div className="d-flex flex-column flex-lg-row">
            <img className="speakers__card-photo" src={photo[0]} alt={name} />
            <img className="speakers__card-photo" src={photo[1]} alt={name} />
          </div>
        )}

        <article className="text-white mt-3 d-flex flex-column gap-3">
          <h3 className="fs-2 mb-0 fw-bold text-center">{name}</h3>
          {isShortDescription ? (
            <p ref={descRef} className="mb-0">
              {desc.substring(0, 160)}...
            </p>
          ) : (
            <p ref={descRef} className="mb-0">
              {desc}
            </p>
          )}
          {desc.length > 160 ? (
            <button
              title={`${isShortDescription ? "Rozwiń opis" : "Zwiń opis"} `}
              className="text-white mx-auto"
              style={{ marginTop: "-1rem" }}
              onClick={() => {
                setIsShortDescription((prev) => !prev);
                if (!isShortDescription)
                  descRef.current?.scrollIntoView({ block: "end" });
              }}
            >
              <i
                className={`bi fs-2 ${
                  isShortDescription ? "bi-caret-down-fill" : "bi-caret-up-fill"
                }`}
              ></i>
            </button>
          ) : null}

          <div>
            <p className="mb-0 fw-bold">Program:</p>
            <ul>
              {lectures.map((lecture) => (
                <li key={lecture}>{lecture}</li>
              ))}
            </ul>
          </div>

          <Button variant="outline-light mx-auto">
            <Link to={link} target="_blank">
              Dowiedz się więcej
            </Link>
          </Button>
        </article>
      </Col>
    );
  }
);

export default SpeakerCard;
