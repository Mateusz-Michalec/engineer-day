import { Link } from 'react-router-dom'
import './ExhibitionTolltip.scss'

const ExhibitionTolltip: React.FC<{
	status: boolean
	index: number
	img?: string
	title: string
}> = (props) => {
	return (
		<div className={`tolltip ${props.status ?  'active' : ''}`}>
			<img
				className='tolltip-logo'
				src={props.img}
				alt='Logo firmy'
			/>
			<p className='tolltip-title'>{props.title}</p>
			<Link to={'/map/aa'}>
				<p className='tolltip-link'>Dowiedz się więcej...</p>
			</Link>
		</div>
	)
}

export default ExhibitionTolltip
