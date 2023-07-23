import "./HomeInfographic.scss";
import { Col } from "react-bootstrap";

type PropsType = {
  title: string;
  image: string;
  circleNumber: string;
  circleText: string;
  desc: string;
  imageRight?: boolean;
};
const HomeInfographic = ({
  title,
  image,
  circleNumber,
  circleText,
  desc,
  imageRight,
}: PropsType) => {
  return (
    <Col xs={12} lg={6} className="text-white">
      <h2 className="fs-2 fw-bold gradient-underscore mb-5 lh-base">{title}</h2>
      <div className="d-flex justify-content-center align-items-center gap-5">
        <img
          className={`home__images ${imageRight ? "order-1" : ""}`}
          src={image}
          alt={title}
        />
        <h3 className="fs-4 text-center d-flex flex-column justify-conent-center align-items-center gap-3">
          <span className="fs-1 text-light bg-info home__infographic-number">
            {" "}
            {circleNumber}
          </span>{" "}
          {circleText}
        </h3>
      </div>
      <p className="fs-5 mt-5 p-3 bg-info rounded home__infographic-info">
        {desc}
      </p>
    </Col>
  );
};

export default HomeInfographic;
