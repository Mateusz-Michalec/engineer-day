import { forwardRef } from "react";
import "./HomePartners.scss";
import { images } from "../../../../constants";
import { Link } from "react-router-dom";

type PropsType = {
  id: string;
};

const HomePartners = forwardRef<HTMLDivElement, PropsType>(({ id }, ref) => {
  return (
    <section className="container">
      <div
        ref={ref}
        id={id}
        className="home__partners animation-delays d-flex flex-wrap gap-4 justify-content-center align-items-center"
      >
        <h2 className="hidden-opacity w-100 fs-1 mb-4 fw-bold text-center">
          Współorganizatorzy
        </h2>

        {images.partners.map((partner, i) => (
          <Link
            target="_blank"
            key={partner.name}
            className="hidden-opacity home__partner"
            to={partner.link}
          >
            <img
              src={partner.img}
              className={`home__partner-logo p-2 rounded ${
                i === images.partners.length - 1 ||
                i === images.partners.length - 2
                  ? "home__partner-logo--long"
                  : ""
              }`}
              alt={partner.name}
              title={partner.name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
});

export default HomePartners;
