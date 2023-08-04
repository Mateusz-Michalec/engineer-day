import React, { useEffect, useRef } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import { images } from "../../constants";
import "./Home.scss";
import HomeInfographic from "../../components/HomeInfographic/HomeInfographic";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import { showElement, showGroupElements } from "../../utils/animate";

const Home = () => {
  // Refs
  const hero = useRef<HTMLDivElement>(null);
  const introduction = useRef<HTMLElement>(null);
  const exhibitors = useRef();
  const speakers = useRef();
  const partners = useRef<HTMLElement>(null);
  const location = useRef<HTMLSpanElement>(null);

  const intersection = useInView([
    hero,
    introduction,
    exhibitors,
    speakers,
    partners,
    location,
  ]);

  useEffect(() => {
    if (intersection.hero) showElement(hero);
    if (intersection.introduction) showGroupElements(introduction);
    if (intersection.exhibitors) showGroupElements(exhibitors);
    if (intersection.speakers) showGroupElements(speakers);
    if (intersection.partners) showGroupElements(partners);
    if (intersection.location) showGroupElements(location);
  }, [intersection]);

  return (
    <Stack className="home" gap={5}>
      <section>
        <div className="home__hero pt-4 text-center">
          <Container
            ref={hero}
            id="hero"
            className="hidden-opacity d-flex flex-column flex-lg-row gap-3 align-items-center"
          >
            <img
              src={images.hero_engineer}
              className="home__hero-img"
              alt="Inżynier na tle maista"
            />
            <header className="text-white">
              <h1 className="home__hero-title fw-bold display-4 lh-sm text-uppercase">
                Radomski Dzień Inżyniera 2023
              </h1>
              <h2 className="mb-0 fs-3">17 października Hala RCS Radom</h2>
            </header>
          </Container>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="home__wave"
        >
          <path
            fill="#4b7fd9"
            fillOpacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,208C480,203,600,117,720,96C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,320,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>

      <article>
        <Container className="px-4">
          <header ref={introduction} id="introduction">
            <h3 className="fs-1 mb-5 fw-bold hidden-x-left">
              Czym jest Radomski Dzień Inżyniera?
            </h3>
            <div className="hidden-opacity rounded p-3 text-white home__event-introduction position-relative">
              <i className="bi bi-quote d-inline-block fs-1 home__quote" />{" "}
              <br />
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
              <div className="text-end">
                <i className="bi bi-quote d-inline-block fs-1 home__quote home__quote--rotated" />
              </div>{" "}
              <img
                className="d-none d-lg-block home__images--small woman-sitting"
                src={images.home_woman_sitting}
                alt="Siedząca kobieta z laptopem"
              />
            </div>
          </header>
        </Container>
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
                ref={exhibitors}
                id="exhibitors"
                title={"Strefa wystawców"}
                image={images.home_ehxibitors}
                circleNumber={"20"}
                circleText={"wystawców"}
                desc={
                  "Przedsiębiorstwa i firmy technologiczne zaprezentują swoje produkty i rozwiązania, dając możliwość zapoznania się z najnowszymi trendami w świecie inżynierii."
                }
              />
              <HomeInfographic
                ref={speakers}
                id="speakers"
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
      </article>

      <section ref={partners} id="partners" className="container">
        <h2 className="hidden-opacity fs-1 mb-5 fw-bold text-center">
          Współorganizatorzy
        </h2>
        <Stack
          direction="horizontal"
          className="hidden-y-top no-wrap home__partners justify-content-center"
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

      <section className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1255c0"
            fillOpacity="1"
            className="home__wave"
            d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,245.3C672,277,768,267,864,261.3C960,256,1056,256,1152,261.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="home__location px-4">
          <Container className="px-0">
            <header>
              <Stack ref={location} id="location" gap={5}>
                <div className="hidden-opacity mx-auto">
                  <h2 className="fs-1 mb-5 text-center fw-bold">
                    Miejsce wydarzenia
                  </h2>
                  <Stack direction="horizontal">
                    <i className="fs-1 rounded p-4 bi bi-geo-alt-fill " />
                    <Stack gap={2}>
                      <span>Hala RCS</span>
                      <span>ul. Andrzeja Struga 63</span>
                      <span>26-600, Radom</span>
                    </Stack>
                  </Stack>
                </div>

                <div className="position-relative hidden-y-top">
                  <img
                    className="img-fluid rounded"
                    src={images.hala_rcs}
                    alt="Hala RCS Radom"
                  />
                  <img
                    className="d-none d-lg-block home__images--small man-with-map position-absolute bottom-0"
                    src={images.home_map}
                    alt="Mężczyzna przyglądający się mapie"
                  />
                </div>
                <p className="mb-0 home__location-desc hidden-opacity">
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
              className="w-100 mt-5 mb-4 rounded"
              height={"428px"}
            ></iframe>
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1255c0"
            fillOpacity="1"
            className="home__wave"
            d="M0,64L48,90.7C96,117,192,171,288,160C384,149,480,75,576,85.3C672,96,768,192,864,202.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </Stack>
  );
};

export default Home;
