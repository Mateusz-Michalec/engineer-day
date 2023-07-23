import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { images } from "../../constants";
import "./Home.scss";
import HomeInfographic from "../../components/HomeInfographic/HomeInfographic";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack className="home bg-light" gap={5}>
      <section>
        <Container fluid className="home__hero">
          <Row className="align-items-center pt-4 gy-4">
            <Col xs={12} lg={6}>
              <img
                src={images.hero_engineer}
                className="w-100 home__hero-img"
                alt="Inżynier"
              />
            </Col>
            <Col xs={12} lg={6} className="text-center text-white px-3">
              <header>
                <h1 className="home__event-name display-4 lh-sm text-uppercase">
                  Radomski Dzień Inżyniera 2023
                </h1>
                <h2 className="fs-5 mb-0">17 października Hala RCS Radom</h2>
              </header>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,208C480,203,600,117,720,96C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,320,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>

      <article>
        <Container className="px-4 ">
          <header>
            <h3 className="fs-1 mb-5 text-center fw-bold">
              Czym jest Radomski Dzień Inżyniera?
            </h3>
            <div className="rounded p-3 fs-5 text-white home__event-introduction">
              <i className="bi bi-quote fs-1 text-danger" /> <br />
              <p>
                To wyjątkowe wydarzenie dedykowane wszystkim inżynierom, którzy
                swoją pasją i pracą wpływają na rozwój technologiczny i postęp
                społeczeństwa.
              </p>
              <p className="mb-0">
                Na ten wyjątkowy dzień przygotowaliśmy bogaty program, który
                zapewni wspaniałą rozrywkę, edukację oraz możliwość nawiązania
                cennych kontaktów zawodowych.
              </p>
              <i className="bi bi-quote fs-1 text-danger d-block mb-0 home__quote--rotated" />
            </div>
          </header>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <Container fluid>
          <Row className="home__infographic-wrapper g-5 mt-0 p-4">
            <HomeInfographic
              title={"Strefa wystawców"}
              image={images.home_ehxibitors}
              circleNumber={"20"}
              circleText={"wystawców"}
              desc={
                "Przedsiębiorstwa i firmy technologiczne zaprezentują swoje produkty i rozwiązania, dając możliwość zapoznania się z najnowszymi trendami w świecie inżynierii."
              }
            />
            <HomeInfographic
              title={"Prelekcje i panele dyskusyjne"}
              image={images.home_speakers}
              circleNumber={"8"}
              circleText={"prelegentów"}
              desc={
                "Czołowi przedstawiciele branży inżynierskiej podzielą się swoimi doświadczeniami, wiedzą i przemyśleniami na temat najnowszych osiągnięć w dziedzinie technologii, innowacji i projektowania."
              }
              imageRight={true}
            />
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,0L48,26.7C96,53,192,107,288,128C384,149,480,139,576,154.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </article>

      <section className="container">
        <h2 className="fs-1 mb-5 fw-bold text-center">Współorganitorzy</h2>
        <Stack
          direction="horizontal"
          className="no-wrap home__partners justify-content-center"
        >
          <i className="bi bi-facebook" />
          <i className="bi bi-twitch" />
          <i className="bi bi-twitter" />
          <i className="bi bi-youtube" />
          <i className="bi bi-facebook" />
          <i className="bi bi-twitch" />
          <i className="bi bi-twitter" />
          <i className="bi bi-youtube" />
        </Stack>
      </section>

      <section className=" text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            className=""
            d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,245.3C672,277,768,267,864,261.3C960,256,1056,256,1152,261.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="home__location px-4">
          <Container>
            <header>
              <Stack gap={5}>
                <h2 className="fs-1 text-center fw-bold">
                  {" "}
                  <i className="bi bi-geo-alt-fill " /> Miejsce wydarzenia
                </h2>
                <Stack className="text-center fs-5" gap={2}>
                  <span>Hala RCS</span>
                  <span>ul. Andrzeja Struga 63</span>
                  <span>26-600, Radom</span>
                </Stack>

                <img
                  className="img-fluid rounded"
                  src={images.hala_rcs}
                  alt="Hala RCS Radom"
                />
                <p className="mb-0 fs-5">
                  <strong>
                    <Link to="https://www.rcs.radom.pl/">
                      Radomskie Centrum Sportu
                    </Link>
                  </strong>{" "}
                  to nowoczesny, przestronny obiekt, który stanowi serce
                  wydarzeń kulturalnych i biznesowych w Radomiu.
                </p>
              </Stack>
            </header>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9954.692051332251!2d21.1714547!3d51.4090626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185ffb946331a1%3A0xe42371f3f9152532!2sRadomskie%20Centrum%20Sportu!5e0!3m2!1spl!2spl!4v1689942908683!5m2!1spl!2spl"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-100 mt-5 rounded"
              height={"400px"}
            ></iframe>
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,160C384,149,480,75,576,85.3C672,96,768,192,864,202.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </Stack>
  );
};

export default Home;
