import { forwardRef } from "react";
import { images } from "../../../../constants";
import "./HomeIntroduction.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropsType = {
  id: string;
};

const HomeIntroduction = forwardRef<HTMLDivElement, PropsType>(
  ({ id }, ref) => {
    return (
      <article className="container" ref={ref} id={id}>
        <header className="hidden-x-left">
          <h2 className="fs-1 mb-5 fw-bold text-center text-lg-start ">
            Czym jest Radomski Dzień Inżyniera?
          </h2>
        </header>
        <div className="hidden-opacity rounded p-3 text-white home__introduction position-relative">
          <i className="bi bi-quote d-inline-block fs-1 home__quote" />
          <p>
            To wyjątkowe wydarzenie dedykowane wszystkim inżynierom, którzy
            swoją pasją i pracą wpływają na rozwój technologiczny i postęp
            społeczeństwa.
          </p>
          <p className="mb-4">
            Na ten wyjątkowy dzień przygotowaliśmy bogaty program, który zapewni
            wspaniałą rozrywkę, edukację oraz możliwość nawiązania cennych
            kontaktów zawodowych.
          </p>
          <Button className="btn-accent btn-accent--1 mx-auto d-block">
            <Link to="program-wydarzenia">Zobacz program wydarzenia</Link>
          </Button>
          <div className="text-end">
            <i className="bi bi-quote d-inline-block fs-1 home__quote home__quote--rotated" />
          </div>{" "}
          <img
            className="d-none d-lg-block home__images--small woman-sitting"
            src={images.home_woman_sitting}
            alt="Siedząca kobieta z laptopem"
          />
        </div>
      </article>
    );
  }
);

export default HomeIntroduction;
