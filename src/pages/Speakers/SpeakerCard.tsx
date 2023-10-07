import React, { forwardRef, useRef, useState } from "react";
import { Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { type Speaker } from "../../constants/images";

const SpeakerCard = forwardRef<HTMLDivElement, Speaker>(
  ({ desc, link, lectures, name, photo }, ref) => {
    const descRef = useRef<HTMLParagraphElement>(null);

    const [isShortDescription, setIsShortDescription] = useState<boolean>(
      desc.length > 160 ? true : false
    );

    return (
      <Col xs={12} lg={9} ref={ref} className="p-4 speakers__card rounded">
        {typeof photo === "string" ? (
          <img
            className={`speakers__card-photo ${
              photo.endsWith(".png") ? "speakers__card-photo--contain" : ""
            }`}
            src={photo}
            alt={name}
          />
        ) : typeof photo === "undefined" ? (
          <img
            className="speakers__card-photo"
            src={images.male_avatar}
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
          <Link to={link} className="mx-auto">
            <Button variant="outline-light">Dowiedz się więcej</Button>
          </Link>
        </article>
      </Col>
    );
  }
);

export default SpeakerCard;
