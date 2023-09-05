import React, { forwardRef } from "react";
import { Container, Row } from "react-bootstrap";
import { images } from "../../../../constants";
import "./HomeInfographics.scss";
import HomeInfographic from "./HomeInfographic/HomeInfographic";

type PropsType = {
  ids: string[];
  refsArray: React.RefObject<HTMLDivElement>[];
};

const HomeInfographics = ({ ids, refsArray }: PropsType) => {
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="home__wave"
      >
        <path
          fill="#004cbb"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="home__infographics">
        <Container>
          <Row className="mt-0 gy-5 px-4">
            <HomeInfographic
              ref={refsArray[0]}
              id={ids[0]}
              title={"Strefa wystawców"}
              image={images.home_ehxibitors}
              circleNumber={"20"}
              circleText={"wystawców"}
              desc={
                "Przedsiębiorstwa i firmy technologiczne zaprezentują swoje produkty i rozwiązania, dając możliwość zapoznania się z najnowszymi trendami w świecie inżynierii."
              }
            />
            <HomeInfographic
              ref={refsArray[1]}
              id={ids[1]}
              title={"Prelekcje i panele dyskusyjne"}
              image={images.home_speakers}
              circleNumber={"8"}
              circleText={"prelegentów"}
              desc={
                "Czołowi przedstawiciele branży inżynierskiej podzielą się swoimi doświadczeniami, wiedzą i przemyśleniami na temat najnowszych osiągnięć w dziedzinie technologii, innowacji i projektowania."
              }
            />
          </Row>
        </Container>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 260"
        className="home__wave"
      >
        <path
          fill="#004cbb"
          fillOpacity="1"
          d="M0,0L48,26.7C96,53,192,107,288,128C384,149,480,139,576,154.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HomeInfographics;
