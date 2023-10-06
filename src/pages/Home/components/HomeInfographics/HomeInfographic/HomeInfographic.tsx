import { forwardRef } from "react";
import "./HomeInfographic.scss";
import { Col, Stack } from "react-bootstrap";

type PropsType = {
  title: string;
  image: string;
  circleNumber: string;
  circleText: string;
  desc: string;
  id: string;
};

const HomeInfographic = forwardRef(
  ({ title, image, circleNumber, circleText, desc, id }: PropsType, ref) => {
    return (
      <Col
        xs={12}
        ref={ref}
        id={id}
        className="text-white animation-delays mt-lg-5"
      >
        <h3 className="hidden-opacity fs-4  gradient-underscore mb-5 lh-base home__infographic-title">
          {title}
        </h3>
        <Stack
          direction="horizontal"
          className="justify-content-center hidden-x-left"
          gap={4}
        >
          <img src={image} className="home__images" alt={title} />
          <h5 className="text-center d-flex flex-column justify-conent-center align-items-center gap-2">
            <span className="fs-2 shadow-lg text-light home__infographic-number">
              {" "}
              {circleNumber}
            </span>{" "}
            <span className="home__infographic-text">{circleText}</span>
          </h5>
        </Stack>
        <p className="hidden-y-bottom fs-5 mt-5 p-3 rounded home__infographic-info">
          {desc}
        </p>
      </Col>
    );
  }
);

export default HomeInfographic;
