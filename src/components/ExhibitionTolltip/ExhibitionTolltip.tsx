import { images } from '../../constants'
import { Link } from 'react-router-dom'
import './ExhibitionTolltip.scss'

const ExhibitionTolltip: React.FC<{
	status: boolean
	index: number
}> = props => {
	const exhibitionsNames = [
		'Stoisko A1',
		'Stoisko B1',
		'Stoisko B2',
		'Stoisko B3',
		'Stoisko B4',
		'Stoisko B5',
		'Stoisko B6',
		'Stoisko B7',
		'Stoisko B8',
		'Stoisko C1',
		'Stoisko C2',
		'Stoisko D1',
		'Stoisko D2',
		'Stoisko D3',
		'Stoisko D4',
		'Stoisko E1',
		'Stoisko E2',
		'Stoisko E3',
		'Stoisko F1',
		'Stoisko F2',
		'Scena',
		'Widownia',
	]

	const exhibitionA1Members = [
		'Radomski Klaster Metalowy, Izba Przemysłowo-Handlowa Ziemi Radomskiej',
		'Rohrbogen Sp. z o.o.',
		'TOHO Poland Sp. z o.o.',
		'Inter-Metal sp. j. Mirosław Radomski, Wiesław Fąfara',
		'PRONAR Sp. z o.o.',
		'Precision Machine Parts Poland Sp. z o.o.',
		'„Lemich” Kooperacja Przemysłowa i Wykonawstwo, Michał Romanowicz',
		'AZZ WSI Sp. z o.o.',
		'GGG Sp. z o.o.',
		'PPUS „KMP” Marcin Piotrowski',
		'STALKO Sp. z o.o. sp.k.',
	]

	const exhibitionA1Links = [
		'https://klastermetalowy.radom.pl',
		'https://www.rohrbogen.ch/pl/Home.htm',
		'https://toho.pl',
		'https://www.inter-metal.com.pl',
		'https://pronar.pl',
		'https://radomskibiznes.pl/pmp-poland-sp.-z-o.o.',
		'https://www.lemich.pl',
		'https://radomskibiznes.pl/azz-wsi-sp.-z-o.o.',
		'https://ggg.pl',
		'https://radomskibiznes.pl/kmp',
		'https://stalko.com',
	]

	const exhibitionC1Members = [
		'Sieć Badawcza Łukasiewicz - Instytut Technologii Eksploatacji w Radomiu',
		'F2J REMAN RADOM Sp. z o.o.',
	]

	const exhibitionC1Links = ['https://www.itee.lukasiewicz.gov.pl', 'https://f2jindustry.com/radom/']

	const exhibitionOthersMembers = [
		'Masterdev Rafał Łęcki',
		'Confirme Sp. z o.o.',
		'Zakład Elektroniczny BORNICO Maciej Bornikowski',
		'Dürr Poland Sp. z o.o.',
		'DEALER BMW ZK MOTORS RADOM',
		'Wydział Transportu, Elektrotechniki i Informatyki (URad.)',
		'Zakład Usług Technicznych Energoaudyt Sp. z o.o.',
		'Radwag Wagi Elektroniczne Witold Lewandowski',
		'Fundacja Platforma Przemysłu Przyszłości',
		'Döhler Polska Sp. z o.o.',
		'Wydział Inżynierii Chemicznej i Towaroznawstwa (Urad.)',
		'PW Krystian Sp. z o.o.',
		'Faurecia Automotive Polska SA',
		'Wydział Mechaniczny (Urad.)',
		'Kratki.pl Marek Bal',
		'Techmatik SA',
		'Radomska Rada Federacji Stowarzyszeń Naukowo – Technicznych NOT',
		'RADMOT Sp. z o.o.',
	]

	const exhibitionOtherLinks = [
		'https://masterdev.pl',
		'https://confirme.com.pl',
		'https://www.bornico.com.pl',
		'https://www.durr.com/en/company/locations/duerr-poland',
		'https://radom.bmw-zkmotors.pl',
		'https://wteii.uniwersytetradom.pl',
		'https://www.zutenergoaudyt.com.pl/pl/',
		'https://sklep.radwag.com/?gclid=Cj0KCQjwm66pBhDQARIsALIR2zBkgez6yJ9iS2j0FWBfhHY3570xoneood9COJAQn8MkDfT-RAnAWP0aAufKEALw_wcB',
		'https://przemyslprzyszlosci.gov.pl',
		'https://www.doehler.pl',
		'https://wicit.uniwersytetradom.pl',
		'https://www.krystian.com.pl',
		'https://www.faurecia-polska.pl',
		'https://wm.uniwersytetradom.pl',
		'https://kratki.com/pl/?gclid=Cj0KCQjwm66pBhDQARIsALIR2zAbicNj1xSnScG_VZqOfusMZuyrynSDtb_zg7BkCvYR1qkwpypsBoYaArh8EALw_wcB&gclsrc=aw.ds',
		'https://www.techmatik.pl',
		'https://radom.enot.pl',
		'https://radmot.com/pl/',
	]

	const exhibitionsIcons = ['bi bi-mic-fill tolltip-icon', 'bi bi-people-fill tolltip-icon']

	const exhibitionsImages = [
		images.logo_1,
		images.logo_2,
		images.logo_3,
		images.logo_4,
		images.logo_5,
		images.logo_6,
		images.logo_7,
		images.logo_8,
		images.logo_9,
		images.logo_10,
		images.logo_11,
		images.logo_12,
		images.logo_13,
		images.logo_14,
		images.logo_15,
		images.logo_16,
		images.logo_17,
		images.logo_18,
		images.logo_19,
	]

	const renderExhibitionMembers = () => {
		if (props.index === 0) {
			return (
				<>
					<ul className='tolltip-list'>
						{exhibitionA1Members.map((member, index) => (
							<Link to={exhibitionA1Links[index]} className='tolltip-link'>
								<li key={index}>{member}</li>
							</Link>
						))}
					</ul>
				</>
			)
		} else if (props.index === 9) {
			return (
				<>
					<ul className='tolltip-list'>
						{exhibitionC1Members.map((member, index) => (
							<Link to={exhibitionC1Links[index]} className='tolltip-link'>
								<li key={index}>{member}</li>
							</Link>
						))}
					</ul>
					<img src={exhibitionsImages[props.index - 1]} alt='Logo firmy' className='tolltip-img' />
				</>
			)
		} else if (props.index === 20) {
			return <i className={exhibitionsIcons[0]} />
		} else if (props.index === 21) {
			return <i className={exhibitionsIcons[1]} />
		} else {
			for (let i = 0; i < exhibitionOthersMembers.length; i++) {
				if (props.index >= 9) {
					return (
						<>
							<Link to={exhibitionOtherLinks[props.index - 2]} className='tolltip-link'>
								<h4 className='tolltip-member'>{exhibitionOthersMembers[props.index - 2]}</h4>
							</Link>
							<Link to={exhibitionOtherLinks[props.index - 2]} className='tolltip-link'>
								<img src={exhibitionsImages[props.index - 1]} alt='Logo firmy' className='tolltip-img' />
							</Link>
						</>
					)
				} else {
					return (
						<>
							<Link to={exhibitionOtherLinks[props.index - 1]} className='tolltip-link'>
								<h4 className='tolltip-member'>{exhibitionOthersMembers[props.index - 1]}</h4>
							</Link>
							<Link to={exhibitionOtherLinks[props.index - 1]} className='tolltip-link'>
								<img src={exhibitionsImages[props.index - 1]} alt='Logo firmy' className='tolltip-img' />
							</Link>
						</>
					)
				}
			}
		}
	}

	return (
		<div className={`tolltip ${props.status ? 'active' : ''}`}>
			<h3 className='tolltip-title'>{exhibitionsNames[props.index]}</h3>
			{renderExhibitionMembers()}
		</div>
	)
}

export default ExhibitionTolltip
