import React, { useEffect, useRef } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import { images } from "../../constants";
import "./Home.scss";
import { Link } from "react-router-dom";
import useInView from "../../hooks/useInView";
import { showElement, showGroupElements } from "../../utils/animate";
import HomeHero from "./components/HomeHero/HomeHero";
import HomeIntroduction from "./components/HomeIntroduction/HomeIntroduction";
import HomeInfographics from "./components/HomeInfographics/HomeInfographics";
import HomePartners from "./components/HomePartners/HomePartners";

const Home = () => {
  // Refs
  const hero = useRef<HTMLDivElement>(null);
  const introduction = useRef<HTMLDivElement>(null);
  const infographic1 = useRef<HTMLDivElement>(null);
  const infographic2 = useRef<HTMLDivElement>(null);
  const partners = useRef<HTMLDivElement>(null);
  const location = useRef<HTMLSpanElement>(null);

  const intersection = useInView([
    hero,
    introduction,
    infographic1,
    infographic2,
    partners,
    location,
  ]);

  useEffect(() => {
    if (intersection.hero) showElement(hero);
    if (intersection.introduction) showGroupElements(introduction);
    if (intersection.infographic1) showGroupElements(infographic1);
    if (intersection.infographic2) showGroupElements(infographic2);
    if (intersection.partners) showGroupElements(partners);
    if (intersection.location) showGroupElements(location);
  }, [intersection]);

  return (
    <Stack className="home" gap={5}>
      <HomeHero ref={hero} id="hero" />
      <HomeIntroduction ref={introduction} id="introduction" />
      <HomeInfographics
        ids={["infographic1", "infographic2"]}
        refsArray={[infographic1, infographic2]}
      />
      <HomePartners id={"partners"} ref={partners} />

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
