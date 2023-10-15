// Home
import hero_engineer from '../assets/images/home/hero_engineer.svg'
import home_speakers from '../assets/images/home/home_speakers.svg'
import home_ehxibitors from '../assets/images/home/home_exhibitors.svg'
import home_learning from '../assets/images/home/home_learning.svg'
import hala_rcs from '../assets/images/hala_rcs-min.jpg'
import home_woman_sitting from '../assets/images/home/home_woman_sitting.svg'
import home_map from '../assets/images/home/home_map.svg'

import speakers_hero from '../assets/images/speakers/speakers_hero.svg'

import exhibitions_hero from '../assets/images/exhibitions_hero.svg'
import exhibitions_map from '../assets/images/exhibitions_map.png'
import exhibitions_logo_uth from '../assets/images/ur.jpg'

import eventProgram from '../assets/images/program.png'

// Partners logos
import iph from '../assets/images/partners/iph.svg'
import ite from '../assets/images/partners/ite.png'
import not from '../assets/images/partners/not.jpg'
import ppp from '../assets/images/partners/ppp.jpg'
import radom from '../assets/images/partners/radom.jpg'
import rkm from '../assets/images/partners/rkm.png'
import ur from '../assets/images/partners/ur.png'
import zst from '../assets/images/partners/zst.jpg'

// Speakers photos
import tomasz_magnowski from '../assets/images/speakers/tomasz_magnowski.jpg'
import agata_dzik from '../assets/images/speakers/agata_dzik.webp'
import dariusz_wrobel from '../assets/images/speakers/dariusz_wrobel.webp'
import marcin_kostrzewa from '../assets/images/speakers/marcin_kostrzewa.webp'
import tomasz_perzynski from '../assets/images/speakers/tomasz_perzynski.webp'
import krzysztof_smiechowski from '../assets/images/speakers/krzysztof_smiechowski.webp'
import studenci from '../assets/images/speakers/studenci.jpg'
import motyl_przemyslaw from '../assets/images/speakers/przemyslaw_motyl.jpg'

//Exhibitions logo

import exhibition_a from '../assets/images/exhibition_a.png'
import exhibition_b from '../assets/images/exhibition_b.png'
import exhibition_c from '../assets/images/exhibition_c.png'
import exhibition_d from '../assets/images/exhibition_d.png'
import exhibition_e from '../assets/images/exhibition_e.png'
import exhibition_f from '../assets/images/exhibition_f.png'

import logo_1 from '../assets/images/logo-1.jpg'
import logo_2 from '../assets/images/logo-2.png'
import logo_3 from '../assets/images/logo-3.png'
import logo_4 from '../assets/images/logo-4.png'
import logo_5 from '../assets/images/logo-5.png'
import logo_6 from '../assets/images/logo-6.png'
import logo_7 from '../assets/images/logo-7.png'
import logo_8 from '../assets/images/logo-8.png'
import logo_9 from '../assets/images/logo-9.png'
import logo_10 from '../assets/images/logo-10.jpg'
import logo_11 from '../assets/images/logo-11.jpg'
import logo_12 from '../assets/images/logo-12.png'
import logo_13 from '../assets/images/logo-13.png'
import logo_14 from '../assets/images/logo-14.jpg'
import logo_15 from '../assets/images/logo-15.png'
import logo_16 from '../assets/images/logo-16.jpg'
import logo_17 from '../assets/images/logo-17.png'
import logo_18 from '../assets/images/logo-18.jpg'
import logo_19 from '../assets/images/logo-19.png'


type Partners = {
	img: string
	name: string
	link: string
}

const partners: Partners[] = [
	{
		img: ppp,
		name: 'Fundacja Platforma Przemysłu Przyszłości',
		link: 'https://przemyslprzyszlosci.gov.pl/',
	},
	{
		img: iph,
		name: 'Izba Przemysłowo-Handlowa Ziemi Radomskiej',
		link: 'https://radomskibiznes.pl/',
	},

	{
		img: not,
		name: 'Radomska Rada Federacji Stowarzyszeń Naukowo – Technicznych',
		link: 'https://radom.enot.pl/',
	},
	{
		img: rkm,
		name: 'Radomski Klaster Metalowy',
		link: 'https://klastermetalowy.radom.pl/',
	},
	{
		img: ite,
		name: 'Sieć Badawcza Łukasiewicz - Instytut Technologii Eksploatacji',
		link: 'https://www.itee.lukasiewicz.gov.pl/',
	},
	{
		img: zst,
		name: 'Zespół Szkół Technicznych im. Tadeusza Kościuszki w Radomiu',
		link: 'https://www.zst-radom.edu.pl/',
	},
	{
		img: ur,
		name: 'Uniwersytet Radomski im. Kazimierza Pułaskiego',
		link: 'https://uniwersytetradom.pl/',
	},
	{
		img: radom,
		name: 'Gmina Miasta Radomia',
		link: 'https://www.radom.pl',
	},
]

export type Speaker = {
	id: string
	name: string
	desc: string
	photo: string | string[]
	lectures: string[]
	link: string
}

const speakers: Speaker[] = [
	{
		id: 'tm-speaker',
		name: 'Tomasz Magnowski',
		desc: 'Doradca zawodowy, nauczyciel zawodu, trener biznesu, Microsoft Innovative Educator Expert. Na co dzień nauczyciel i doradca zawodowy oraz właściciel firmy szkoleniowej TiM. Organizator Ogólnopolskich Targów Szkół Wyższych w Radomiu i Wystawy Interaktywnej MÓZG. Od 2019 r. przewodniczący Zarządu Głównego Stowarzyszenia Doradców Szkolnych i Zawodowych RP.',
		photo: tomasz_magnowski,
		lectures: ['Wprowadzenie - co ja tutaj robię?', 'Wiedzomania', 'Pora na działanie'],
		link: 'https://doradztwoszkolne.pl/autor/tomasz-magnowski--14765',
	},
	{
		id: 'mz-speaker',
		name: 'dr Mirosław Żurek',
		desc: 'Sieć Badawcza Łukasiewicz - Instytut Technologii Eksploatacji od ponad trzydziestu lat specjalizuje się w kreowaniu innowacyjności w obszarze budowy i eksploatacji maszyn, bezpieczeństwa technicznego i ochrony środowiska, a także opracowywaniu modelowych rozwiązań dotyczących programów ustawicznego kształcenia i doskonalenia kadr dla innowacyjnej gospodarki oraz transferu zaawansowanych technologii do zastosowań przemysłowych.',
		lectures: ['Wprowadzenie - co ja tutaj robię?', 'Wiedzomania'],
		link: 'https://www.itee.lukasiewicz.gov.pl/obszary/centrum-badan-edukacji-zawodowej-i-zarzadzania-innowacjami',
		photo: ite,
	},
	{
		id: 'opowiadacze-speaker',
		name: 'Opowiadacze: Anna Dzik, Dariusz Wróbel (grupa Baśnie z Sześciu Stron Świata)',
		desc: 'Radomska Grupa Opowiadaczy to ludzie, których pasjonuje opowiadanie i storytelling. Opowiadamy historie bardziej i mniej prawdziwe, ale zawsze z pasją.',
		lectures: ['Moje życie, mój wybór, moja odpowiedzialność', 'Szczęście należy sobie wypracować, a nie wymarzyć'],
		link: 'https://www.facebook.com/radomska.grupa.opowiadaczy',
		photo: [agata_dzik, dariusz_wrobel],
	},

	{
		id: 'mk-speaker',
		name: 'dr hab. inż. Marcin Kostrzewa, prof. UTH Rad',
		desc: 'Dziekan Wydziału Inżynierii Chemicznej i Towaroznawstwa',
		lectures: ['Inżynier to jest ktoś!'],
		link: 'https://wicit.uniwersytetradom.pl/katedra-fizykochemii-i-technologii-materialow/',
		photo: marcin_kostrzewa,
	},
	{
		id: 'pm-speaker',
		name: 'dr inż. Przemysław Motyl',
		desc: 'Prodziekan Wydziału Mechanicznego UR',
		lectures: ['Inżynier to jest ktoś!'],
		link: 'https://wm.uniwersytetradom.pl/wladze/#',
		photo: motyl_przemyslaw,
	},
	{
		id: 'tp-speaker',
		name: 'dr hab. inż. Tomasz Perzyński, prof. URad',
		desc: 'Dziekan Wydziału Transportu, Elektrotechniki i Informatyki',
		lectures: ['Inżynier to jest ktoś!'],
		link: 'https://wteii.uniwersytetradom.pl/wladze-wydzialu/',
		photo: tomasz_perzynski,
	},
	{
		id: 'ks-speaker',
		name: 'dr hab. inż. Krzysztof Śmiechowski, prof. UTH Rad',
		desc: 'Prezes Zarządu Radomskiej Rady FSNT-NOT',
		lectures: ['Inżynier to jest ktoś!'],
		link: 'https://radom.enot.pl/inne/zarzad-radomskiej-rady',
		photo: krzysztof_smiechowski,
	},
	{
		id: 'studenci-speaker',
		name: 'Studenci Politechniki Gdańskiej',
		desc: 'Studenci Politechniki Gdańskiej zaprezentują swóje osiągnięcia w dziedzinie inżynierii.',
		lectures: ['Jak zostać kimś, kto cieszy się tym co robi?'],
		link: 'https://forumakademickie.pl/sport-akademicki/studenci-politechniki-gdanskiej-zaprezentowali-swoj-nowy-bolid/',
		photo: studenci,
	},
	{
		id: 'enot-speaker',
		name: 'Radomska Rada Federacji Stowarzyszeń Naukowo – Technicznych',
		desc: 'Odbędą się dwie sesje w ramach programu Młudy Innowator, podczas których zostaną przyznane nagrody dla uczniów szkól podstawowych oraz średnich.',
		lectures: ['Młody Innowator'],
		link: 'https://radom.enot.pl/inne/mlody-innowator-2',
		photo: not,
	},
]

export default {
	hero_engineer,
	home_speakers,
	home_ehxibitors,
	hala_rcs,
	home_woman_sitting,
	home_map,
	home_learning,
	speakers_hero,
	exhibitions_hero,
	exhibitions_map,
	exhibitions_logo_uth,
	partners,
	eventProgram,
	speakers,
	exhibition_a,
	exhibition_b,
	exhibition_c,
	exhibition_d,
	exhibition_e,
	exhibition_f,
	logo_1,
	logo_2,
	logo_3,
	logo_4,
	logo_5,
	logo_6,
	logo_7,
	logo_8,
	logo_9,
	logo_10,
	logo_11,
	logo_12,
	logo_13,
	logo_14,
	logo_15,
	logo_16,
	logo_17,
	logo_18,
	logo_19,
}
