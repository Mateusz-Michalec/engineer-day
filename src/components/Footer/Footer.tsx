import './Footer.scss'
import { images } from '../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__top'>
					<Link to={'https://uniwersytetradom.pl'}>
						<div className='footer__top-img'>
							<img src={images.exhibitions_logo_uth} alt='Logo Uniwersytetu Radomskiego' />
						</div>
					</Link>
					<div className='footer__top-text'>
						<p>
							Strona została wykonana przez absolwentów{' '}
							<Link to={'https://uniwersytetradom.pl'} className='footer__top-text-link'>
								Uniwersytetu Radomskiego
							</Link>
						</p>
					</div>
				</div>
				<div className='footer__bottom'>
					<div className='footer__bottom-authors'>
						<p>&copy; {currentYear}</p>
						<Link to={'https://github.com/Mateusz-Michalec'}>
							<p className='footer__bottom-authors-member'>Mateusz Michalec</p>
						</Link>
						<Link to={'https://github.com/KamilPorada'}>
							<p className='footer__bottom-authors-member'>Kamil Porada</p>
						</Link>
					</div>
					<p>Wszelkie prawa zastrzeżone</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
