import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Exhibitions.scss";
import { images } from "../../constants";
import useInView from "../../hooks/useInView";
import useDotsGenerator from "../../hooks/useDotsGenerator";
import { showElement } from "../../utils/animate";
import ExhibitionTooltip from "../../components/ExhibitionTolltip/ExhibitionTolltip";

const Exhibitions = () => {
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(21);
  const hero = useRef<HTMLDivElement>(null);

  const intersection = useInView([hero]);

  useEffect(() => {
    if (intersection.hero) showElement(hero);
  }, [intersection]);

  const mobileDots = useDotsGenerator("mobile");
  const desktopDots = useDotsGenerator("desktop");

  const isMobile = window.innerWidth < 992 ? true : false;

  const ExhibitionsTitles = [
    "A1",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "C1",
    "C2",
    "D1",
    "D2",
    "D3",
    "D4",
    "E1",
    "E2",
    "E3",
    "F1",
    "F2",
  ];

  return (
    <div className="exhibitions">
      <section>
        <div className="exhibitions__hero text-white px-4 pb-4">
          <Container ref={hero} id="hero" className="hidden-opacity">
            <Row className="gy-4 align-items-center">
              <Col xs={12} md={6}>
                <img
                  className="exhibitions__hero-img"
                  src={images.exhibitions_hero}
                  alt="Człowiek spoglądający na mapę oraz drogowskaz"
                />
              </Col>
              <Col xs={12} md={6}>
                <h1 className="fw-bold">Mapa wydarzenia</h1>
                <p className="mb-0">
                  Zapoznaj się mapą przedstawiającą lokalizacje poszczególnych
                  sesji, wystąpień i atrakcji podczas Radomskiego Dnia
                  Inżyniera.{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <svg
          preserveAspectRatio={isMobile ? "xMidYMid meet" : "none"}
          className={isMobile ? "" : "svg-wave"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 260"
        >
          <path
            fill="#4b7fd9"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,42.7C672,21,768,11,864,16C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className="exhibitions__map">
        <h2 className="fw-bold exhibitions__map-title">Plan Hali RCS</h2>
        <Container>
          <div className="overflow position-relative w-100 h-100">
            <img
              className="exhibitions__map-photo px-3"
              src={images.exhibitions_map}
              alt="Mapa Radomskiego dnia Inżyniera"
              onClick={() => setTooltipVisible(null)}
            />
            {mobileDots.map((dot, index) => (
              <div key={index} className="mobile-dots">
                <div
                  className={`exhibitions__map-dot ${
                    tooltipVisible === index ? "active" : ""
                  }`}
                  style={{ top: dot.top, left: dot.left }}
                  onMouseEnter={() => setTooltipVisible(index)}
                  onClick={() => setTooltipVisible(index)}
                >
                  {index < ExhibitionsTitles.length ? (
                    <p className="exhibitions__map-dot-index">
                      {ExhibitionsTitles[index]}
                    </p>
                  ) : index === ExhibitionsTitles.length ? (
                    <i className="bi bi-mic-fill exhibitions__map-dot-icon"></i>
                  ) : index === ExhibitionsTitles.length + 1 ? (
                    <i className="bi bi-people-fill exhibitions__map-dot-icon"></i>
                  ) : null}
                </div>
                <ExhibitionTooltip
                  status={tooltipVisible === index}
                  index={index}
                />
              </div>
            ))}
            {desktopDots.map((dot, index) => (
              <div key={index} className="desktop-dots">
                <div
                  className={`exhibitions__map-dot ${
                    tooltipVisible === index ? "active" : ""
                  }`}
                  style={{ top: dot.top, left: dot.left }}
                  onMouseEnter={() => setTooltipVisible(index)}
                  onClick={() => setTooltipVisible(index)}
                >
                  {index < ExhibitionsTitles.length ? (
                    <p className="exhibitions__map-dot-index">
                      {ExhibitionsTitles[index]}
                    </p>
                  ) : index === ExhibitionsTitles.length ? (
                    <i className="bi bi-mic-fill exhibitions__map-dot-icon"></i>
                  ) : index === ExhibitionsTitles.length + 1 ? (
                    <i className="bi bi-people-fill exhibitions__map-dot-icon"></i>
                  ) : null}
                </div>

                <ExhibitionTooltip
                  status={tooltipVisible === index}
                  index={index}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="exhibitions__members">
        <Container>
          <h2 className="fw-bold text-center exhibitions__members-title">
            Stoiska wystawców
          </h2>
          <div className="exhibitions__members-box">
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska A</h3>
              <img
                src={images.exhibition_a}
                alt="Przedsiębiorstwa na stoisku a"
                className="exhibitions__members-box-item-img"
              />
            </div>
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska B</h3>
              <img
                src={images.exhibition_b}
                alt="Przedsiębiorstwa na stoisku b"
                className="exhibitions__members-box-item-img"
              />
            </div>
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska C</h3>
              <img
                src={images.exhibition_c}
                alt="Przedsiębiorstwa na stoisku C"
                className="exhibitions__members-box-item-img"
              />
            </div>
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska D</h3>
              <img
                src={images.exhibition_d}
                alt="Przedsiębiorstwa na stoisku d"
                className="exhibitions__members-box-item-img"
              />
            </div>
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska E</h3>
              <img
                src={images.exhibition_e}
                alt="Przedsiębiorstwa na stoisku e"
                className="exhibitions__members-box-item-img"
              />
            </div>
            <div className="exhibitions__members-box-item">
              <h3 className="exhibitions__members-box-item-title">Stoiska F</h3>
              <img
                src={images.exhibition_f}
                alt="Przedsiębiorstwa na stoisku f"
                className="exhibitions__members-box-item-img"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Exhibitions;
