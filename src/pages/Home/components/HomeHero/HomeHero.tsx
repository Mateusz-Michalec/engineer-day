import { forwardRef } from "react";
import { Container } from "react-bootstrap";
import { images } from "../../../../constants";
import "./HomeHero.scss";

type PropsType = {
  id: string;
};

const HomeHero = forwardRef<HTMLDivElement, PropsType>(({ id }, ref) => {
  return (
    <section>
      <div className="home__hero pt-4 text-center">
        <Container
          ref={ref}
          id={id}
          className="hidden-opacity d-flex flex-column flex-lg-row gap-3 align-items-center"
        >
          <img
            src={images.hero_engineer}
            className="home__hero-img"
            alt="Inżynier na tle miasta"
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
  );
});

export default HomeHero;
