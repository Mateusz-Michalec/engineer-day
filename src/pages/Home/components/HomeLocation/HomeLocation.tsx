import { forwardRef } from "react";
import "./HomeLocation.scss";
import { Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images } from "../../../../constants";

type PropsType = {
  id: string;
};

const HomeLocation = forwardRef<HTMLDivElement, PropsType>(({ id }, ref) => {
  return (
    <section className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1255c0"
          fillOpacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,245.3C672,277,768,267,864,261.3C960,256,1056,256,1152,261.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="home__location">
        <Container ref={ref} id={id}>
          <header className="hidden-opacity  d-flex flex-column align-items-center">
            <h2 className="fs-1 text-center fw-bold">Miejsce wydarzenia</h2>
            <div className="my-4 my-lg-5 d-flex">
              <i className="fs-1 rounded p-4 bi bi-geo-alt-fill" />
              <Stack gap={2}>
                <span>Hala RCS</span>
                <span>ul. Andrzeja Struga 63</span>
                <span>26-600, Radom</span>
              </Stack>
            </div>
          </header>

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
          <p className="my-4 my-lg-5  home__location-desc hidden-opacity">
            <strong>
              <Link to="https://www.rcs.radom.pl/">
                Radomskie Centrum Sportu
              </Link>
            </strong>{" "}
            to nowoczesny, przestronny obiekt, który stanowi serce wydarzeń
            kulturalnych i biznesowych w Radomiu.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9954.692051332251!2d21.1714547!3d51.4090626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185ffb946331a1%3A0xe42371f3f9152532!2sRadomskie%20Centrum%20Sportu!5e0!3m2!1spl!2spl!4v1689942908683!5m2!1spl!2spl"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-100 rounded"
            height={"428px"}
          ></iframe>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1255c0"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,160C384,149,480,75,576,85.3C672,96,768,192,864,202.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
});

export default HomeLocation;
