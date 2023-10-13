// import { Link } from 'react-router-dom'
import './ExhibitionTolltip.scss'
import { images } from '../../constants'

const ExhibitionTolltip: React.FC<{
	status: boolean
	index: number
	img?: string
	title: string
}> = props => {
	const exhibitionsNames = [
		'Stoisko 1',
		'Stoisko 2',
		'Stoisko 3',
		'Stoisko 4',
		'Stoisko 5',
		'Stoisko 6',
		'Stoisko 7',
		'Wejście na halę',
		'Wejście na halę',
		'Wejście na halę',
		'Wejście na halę',
		'Wejście na wydarzenie',
		'Widownia',
		'Scena',
		'Konsola',
		'Warsztaty',
	]
	const exhibitionsImages = [
		images.exhibition_1,
		images.exhibition_2,
		images.exhibition_3,
		images.exhibition_4,
		images.exhibition_5,
		images.exhibition_6,
		images.exhibition_7,
	]

	const exhibition1Members = [
		'Wydział Transportu, Elektrotechniki i Informatyki (URad.)',
		'Confirme Sp. z o.o.',
		'Zakład Elektroniczny BORNICO Maciej Bornikowski',
		'Zakład Usług Technicznych Energoaudyt Sp. z o.o.',
		'Masterdev Rafał Łęcki',
		'Dürr Poland Sp. z o.o.',
		'Radwag Wagi Elektroniczne Witold Lewandowski',
		'DEALER BMW ZK MOTORS RADOM',
	]

	const exhibition2Members = [
		'Fundacja Platforma Przemysłu Przyszłości',
		'Zespół Szkół Technicznych im. Tadeusza Kościuszki w Radomiu',
	]

	const exhibition3Members = [
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

	const exhibition4Members = [
		'Sieć Badawcza Łukasiewicz - Instytut Technologii Eksploatacji w Radomiu',
		'F2J REMAN RADOM Sp. z o.o.',
	]

	const exhibition5Members = ['Radomska Rada Federacji Stowarzyszeń Naukowo – Technicznych NOT', 'RADMOT Sp. z o.o.']

	const exhibition6Members = [
		'Wydział Inżynierii Chemicznej i Towaroznawstwa (Urad.)',
		'Faurecia Automotive Polska SA',
		'PW Krystian Sp. z o.o.',
		'Döhler Polska Sp. z o.o.',
	]

	const exhibition7Members = ['Wydział Mechaniczny (Urad.)', 'Kratki.pl Marek Bal', 'Techmatik SA']

	const exhibitionMembersArrays = [
		exhibition1Members,
		exhibition2Members,
		exhibition3Members,
		exhibition4Members,
		exhibition5Members,
		exhibition6Members,
		exhibition7Members,
	]

	const exhibitionsIcons = [
		'bi bi-door-open-fill tolltip-icon',
		'bi bi-door-open-fill tolltip-icon',
		'bi bi-door-open-fill tolltip-icon',
		'bi bi-door-open-fill tolltip-icon',
		'bi bi-door-open-fill tolltip-icon',
		'bi bi-people-fill tolltip-icon',
		'bi bi-mic-fill tolltip-icon',
		'bi bi-volume-up-fill tolltip-icon',
		'bi bi-gear-fill tolltip-icon',
	]

	const isImage = props.index >= 0 && props.index < 7

	return (
		<div className={`tolltip ${props.status ? 'active' : ''}`}>
			<p className='tolltip-title'>{exhibitionsNames[props.index]}</p>
			{isImage ? (
				<ul className='tolltip-list'>
					{exhibitionMembersArrays[props.index]?.map((member, i) => (
						<li key={i}>{member}</li>
					))}
				</ul>
			) : (
				<i className={exhibitionsIcons[props.index - 7]}></i>
			)}
		</div>
	)
}

export default ExhibitionTolltip
