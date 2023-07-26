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
      <Col xs={12} ref={ref} id={id} className="text-white animation-delays">
        <h2 className="hidden-opacity fs-2 fw-bold gradient-underscore mb-5 lh-base home__infographic-title">
          {title}
        </h2>
        <Stack
          direction="horizontal"
          className="justify-content-center hidden-x-left"
        >
          <object data={image} className={"home__images"} type="image/svg+xml">
            <img src={image} className={"home__images"} alt={title} />
          </object>

          <h3 className="fs-4 text-center d-flex flex-column justify-conent-center align-items-center gap-3">
            <span className="fs-1 shadow-lg text-light home__infographic-number">
              {" "}
              {circleNumber}
            </span>{" "}
            <span className="home__infographic-text">{circleText}</span>
          </h3>
        </Stack>
        <p className="hidden-y-bottom fs-5 mt-5 p-3 rounded home__infographic-info">
          {desc}
        </p>
      </Col>
    );
  }
);

export default HomeInfographic;
