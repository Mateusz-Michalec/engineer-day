import React, { forwardRef } from "react";
import { images } from "../../../../constants";
import "./HomeIntroduction.scss";

type PropsType = {
  id: string;
};

const HomeIntroduction = forwardRef<HTMLDivElement, PropsType>(
  ({ id }, ref) => {
    return (
      <article className="container" ref={ref} id={id}>
        <header className="hidden-x-left">
          <h3 className="fs-1 mb-5 fw-bold ">
            Czym jest Radomski Dzień Inżyniera?
          </h3>
        </header>
        <div className="hidden-opacity rounded p-3 text-white home__introduction position-relative">
          <i className="bi bi-quote d-inline-block fs-1 home__quote" /> <br />
          <p>
            To wyjątkowe wydarzenie dedykowane wszystkim inżynierom, którzy
            swoją pasją i pracą wpływają na rozwój technologiczny i postęp
            społeczeństwa.
          </p>
          <p className="mb-0">
            Na ten wyjątkowy dzień przygotowaliśmy bogaty program, który zapewni
            wspaniałą rozrywkę, edukację oraz możliwość nawiązania cennych
            kontaktów zawodowych.
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
      </article>
    );
  }
);

export default HomeIntroduction;
