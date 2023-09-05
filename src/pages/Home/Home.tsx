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
import HomeLocation from "./components/HomeLocation/HomeLocation";

const Home = () => {
  // Refs
  const hero = useRef<HTMLDivElement>(null);
  const introduction = useRef<HTMLDivElement>(null);
  const infographic1 = useRef<HTMLDivElement>(null);
  const infographic2 = useRef<HTMLDivElement>(null);
  const infographic3 = useRef<HTMLDivElement>(null);
  const partners = useRef<HTMLDivElement>(null);
  const location = useRef<HTMLDivElement>(null);

  const intersection = useInView([
    hero,
    introduction,
    infographic1,
    infographic2,
    infographic3,
    partners,
    location,
  ]);

  useEffect(() => {
    if (intersection.hero) showElement(hero);
    if (intersection.introduction) showGroupElements(introduction);
    if (intersection.infographic1) showGroupElements(infographic1);
    if (intersection.infographic2) showGroupElements(infographic2);
    if (intersection.infographic3) showGroupElements(infographic3);
    if (intersection.partners) showGroupElements(partners);
    if (intersection.location) showGroupElements(location);
  }, [intersection]);

  return (
    <Stack className="home" gap={5}>
      <HomeHero ref={hero} id="hero" />
      <HomeIntroduction ref={introduction} id="introduction" />
      <HomeInfographics
        ids={["infographic1", "infographic2", "infographic3"]}
        refsArray={[infographic1, infographic2, infographic3]}
      />
      <HomePartners id={"partners"} ref={partners} />
      <HomeLocation id={"location"} ref={location} />
    </Stack>
  );
};

export default Home;
