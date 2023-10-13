import { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Exhibitions.scss'
import { images } from '../../constants'
import useInView from '../../hooks/useInView'
import useDotsGenerator from '../../hooks/useDotsGenerator'
import { showElement } from '../../utils/animate'
import ExhibitionTooltip from '../../components/ExhibitionTolltip/ExhibitionTolltip'
import ActionBar from '../../components/ActionBar/ActionBar'

const Exhibitions = () => {
	const [tooltipVisible, setTooltipVisible] = useState<number | null>(11)
	const hero = useRef<HTMLDivElement>(null)

	const intersection = useInView([hero])

	useEffect(() => {
		if (intersection.hero) showElement(hero)
	}, [intersection])

	const mobileDots = useDotsGenerator('mobile')
	const desktopDots = useDotsGenerator('desktop')

	const isMobile = window.innerWidth < 992 ? true : false

	return (
		<div className='exhibitions'>
			<section>
				<ActionBar title='Mapa wydarzenia' />
				<div className='exhibitions__hero text-white px-4 py-5'>
					<Container ref={hero} id='hero' className='hidden-opacity'>
						<Row className='gy-4 align-items-center'>
							<Col xs={12} md={6}>
								<img
									className='exhibitions__hero-img'
									src={images.exhibitions_hero}
									alt='Człowiek spoglądający na mapę oraz drogowskaz'
								/>
							</Col>
							<Col xs={12} md={6}>
								<h1 className='fw-bold'>Mapa wydarzenia</h1>
								<p className='mb-0'>
									Zapoznaj się mapą przedstawiającą lokalizacje poszczególnych sesji, wystąpień i atrakcji podczas
									Radomskiego Dnia Inżyniera.{' '}
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<svg
					preserveAspectRatio={isMobile ? 'xMidYMid meet' : 'none'}
					className={isMobile ? '' : 'svg-wave'}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 260'>
					<path
						fill='#4b7fd9'
						fillOpacity='1'
						d='M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,42.7C672,21,768,11,864,16C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
				</svg>
			</section>
			<section className='exhibitions__map'>
				<h2 className='fw-bold exhibitions__map-title'>Plan Hali RCS</h2>
				<Container>
					<div className='overflow position-relative w-100 h-100'>
						<img
							className='exhibitions__map-photo px-3'
							src={images.exhibitions_map}
							alt='Mapa Radomskiego dnia Inżyniera'
							onClick={() => setTooltipVisible(null)}
						/>
						{mobileDots.map((dot, index) => (
							<div key={index} className='mobile-dots'>
								<div
									className={`exhibitions__map-dot ${tooltipVisible === index ? 'active' : ''}`}
									style={{ top: dot.top, left: dot.left }}
									onMouseEnter={() => setTooltipVisible(index)}
									onClick={() => setTooltipVisible(index)}>
									{index < 7 ? (
										<p className='exhibitions__map-dot-index'>{index + 1}</p>
									) : index >= 7 && index < 12 ? (
										<i className='bi bi-door-open-fill exhibitions__map-dot-icon'></i>
									) : index === 12 ? (
										<i className='bi bi-people-fill exhibitions__map-dot-icon'></i>
									) : index === 13 ? (
										<i className='bi bi-mic-fill exhibitions__map-dot-icon'></i>
									) : index === 14 ? (
										<i className='bi bi-volume-up-fill exhibitions__map-dot-icon'></i>
									) : index === 15 ? (
										<i className='bi bi-gear-fill exhibitions__map-dot-icon'></i>
									) : null}
								</div>
								<ExhibitionTooltip
									status={tooltipVisible === index}
									index={index}
									img={index % 2 === 0 ? images.exhibitions_logo_uth : images.exhibitions_logo_radom}
									title={index % 2 === 0 ? 'Uniwersytet Radomski' : 'Urząd miejski w Radomiu'}
								/>
							</div>
						))}
						{desktopDots.map((dot, index) => (
							<div key={index} className='desktop-dots'>
								<div
									className={`exhibitions__map-dot ${tooltipVisible === index ? 'active' : ''}`}
									style={{ top: dot.top, left: dot.left }}
									onMouseEnter={() => setTooltipVisible(index)}
									onClick={() => setTooltipVisible(index)}>
									{index < 7 ? (
										<p className='exhibitions__map-dot-index'>{index + 1}</p>
									) : index >= 7 && index < 12 ? (
										<i className='bi bi-door-open-fill exhibitions__map-dot-icon'></i>
									) : index === 12 ? (
										<i className='bi bi-people-fill exhibitions__map-dot-icon'></i>
									) : index === 13 ? (
										<i className='bi bi-mic-fill exhibitions__map-dot-icon'></i>
									) : index === 14 ? (
										<i className='bi bi-volume-up-fill exhibitions__map-dot-icon'></i>
									) : index === 15 ? (
										<i className='bi bi-gear-fill exhibitions__map-dot-icon'></i>
									) : null}
								</div>
								<ExhibitionTooltip
									status={tooltipVisible === index}
									index={index}
									img={index % 2 === 0 ? images.exhibitions_logo_uth : images.exhibitions_logo_radom}
									title={index % 2 === 0 ? 'Uniwersytet Radomski' : 'Urząd miejski w Radomiu'}
								/>
							</div>
						))}
					</div>
				</Container>
			</section>
			<section className='exhibitions__members'>
				<Container>
					<h2 className='fw-bold text-center exhibitions__members-title'>Zaproszone przedsiębiorstwa</h2>
					<div className='exhibitions__members-box'>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 1</h3>
							<img
								src={images.exhibition_1}
								alt='Przedsiębiorstwa na stoisku 1'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 2</h3>
							<img
								src={images.exhibition_2}
								alt='Przedsiębiorstwa na stoisku 2'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 3</h3>
							<img
								src={images.exhibition_3}
								alt='Przedsiębiorstwa na stoisku 3'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 4</h3>
							<img
								src={images.exhibition_4}
								alt='Przedsiębiorstwa na stoisku 4'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 5</h3>
							<img
								src={images.exhibition_5}
								alt='Przedsiębiorstwa na stoisku 5'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 6</h3>
							<img
								src={images.exhibition_6}
								alt='Przedsiębiorstwa na stoisku 6'
								className='exhibitions__members-box-item-img'
							/>
						</div>
						<div className='exhibitions__members-box-item'>
							<h3 className='exhibitions__members-box-item-title'>Stoisko 7</h3>
							<img
								src={images.exhibition_7}
								alt='Przedsiębiorstwa na stoisku 7'
								className='exhibitions__members-box-item-img'
							/>
						</div>
					</div>
				</Container>
			</section>
		</div>
	)
}

export default Exhibitions
