import hero_engineer from "../assets/images/hero_engineer.svg";
import home_speakers from "../assets/images/home_speakers.svg";
import home_ehxibitors from "../assets/images/home_exhibitors.svg";
import home_learning from "../assets/images/home_learning.svg";
import hala_rcs from "../assets/images/hala_rcs-min.jpg";
import home_woman_sitting from "../assets/images/home_woman_sitting.svg";
import home_map from "../assets/images/home_map.svg";
import female_avatar from "../assets/images/female_avatar.svg";
import male_avatar from "../assets/images/male_avatar.svg";
import speakers_hero from "../assets/images/speakers_hero.svg";
import exhibitions_hero from "../assets/images/exhibitions_hero.svg";
import exhibitions_map from "../assets/images/exhibitions_map.png";
import exhibitions_logo_uth from "../assets/images/ur.jpg";
import exhibitions_logo_radom from "../assets/images/logo_radom.jpg";
import eventProgram from "../assets/images/program.png";

// Partners logos
import iph from "../assets/images/partners_logos/iph.png";
import ite from "../assets/images/partners_logos/ite.png";
import not from "../assets/images/partners_logos/not.jpg";
import ppp from "../assets/images/partners_logos/ppp.jpg";
import radom from "../assets/images/partners_logos/radom.jpg";
import rkm from "../assets/images/partners_logos/rkm.png";
import ur from "../assets/images/partners_logos/ur.png";
import zst from "../assets/images/partners_logos/zst.jpg";

type Partners = {
  img: string;
  name: string;
  link: string;
};

const partners: Partners[] = [
  {
    img: ppp,
    name: "Fundacja Platforma Przemysłu Przyszłości",
    link: "https://przemyslprzyszlosci.gov.pl/",
  },
  {
    img: iph,
    name: "Izba Przemysłowo-Handlowa Ziemi Radomskiej",
    link: "https://radomskibiznes.pl/",
  },

  {
    img: not,
    name: "Radomska Rada Federacji Stowarzyszeń Naukowo – Technicznych",
    link: "https://radom.enot.pl/",
  },
  {
    img: rkm,
    name: "Radomski Klaster Metalowy",
    link: "https://klastermetalowy.radom.pl/",
  },
  {
    img: ite,
    name: "Sieć Badawcza Łukasiewicz - Instytut Technologii Eksploatacji",
    link: "https://www.itee.lukasiewicz.gov.pl/",
  },
  {
    img: zst,
    name: "Zespół Szkół Technicznych im. Tadeusza Kościuszki w Radomiu",
    link: "https://www.zst-radom.edu.pl/",
  },
  {
    img: ur,
    name: "Uniwersytet Radomski im. Kazimierza Pułaskiego",
    link: "https://uniwersytetradom.pl/",
  },
  {
    img: radom,
    name: "Gmina Miasta Radomia",
    link: "https://www.radom.pl",
  },
];

export default {
  hero_engineer,
  home_speakers,
  home_ehxibitors,
  hala_rcs,
  home_woman_sitting,
  home_map,
  home_learning,
  female_avatar,
  male_avatar,
  speakers_hero,
  exhibitions_hero,
  exhibitions_map,
  exhibitions_logo_uth,
  exhibitions_logo_radom,
  partners,
  eventProgram,
};
