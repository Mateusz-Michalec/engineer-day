import { useMemo } from 'react'

interface Dot {
	top: string
	left: string
}

const useDotsGenerator = (type: 'mobile' | 'desktop'): Dot[] => {
	return useMemo(() => {
		const dots: Dot[] = []

		if (type === 'mobile') {
			const mobileDots: Dot[] = [
				//A
				{
					top: '90%',
					left: '81%',
				},
				//B
				{
					top: '65.8%',
					left: '116.4%',
				},
				{
					top: '72%',
					left: '103.7%',
				},
				{
					top: '63.8%',
					left: '103.7%',
				},
				{
					top: '54.2%',
					left: '140.6%',
				},
				{
					top: '46.2%',
					left: '133.6%',
				},
				{
					top: '50%',
					left: '120.8%',
				},
				{
					top: '50%',
					left: '110.1%',
				},
				{
					top: '46.5%',
					left: '98.3%',
				},
				//C
				{
					top: '72%',
					left: '86.4%',
				},
				{
					top: '63.8%',
					left: '86.4%',
				},
				//D
				{
					top: '72%',
					left: '67.7%',
				},
				{
					top: '63.8%',
					left: '67.7%',
				},
				{
					top: '72%',
					left: '53.8%',
				},
				{
					top: '63.8%',
					left: '53.8%',
				},
				//E
				{
					top: '50%',
					left: '65.3%',
				},
				{
					top: '46%',
					left: '51.4%',
				},
				{
					top: '46%',
					left: '26.4%',
				},
				//F
				{
					top: '74%',
					left: '41.1%',
				},
				{
					top: '68%',
					left: '32%',
				},
				
				//SCENA
				{
					top: '68.2%',
					left: '136%',
				},
				{
					top: '68.5%',
					left: '166.3%',
				},
				
			]
			dots.push(...mobileDots)
		} else {
			const desktopDots: Dot[] = [
				//A
				{
					top: '90%',
					left: '40.5%',
				},
				//B
				{
					top: '65.8%',
					left: '58.4%',
				},
				{
					top: '72%',
					left: '52%',
				},
				{
					top: '63.8%',
					left: '52%',
				},
				{
					top: '54.5%',
					left: '70.8%',
				},
				{
					top: '46.2%',
					left: '66.8%',
				},
				{
					top: '50%',
					left: '60.7%',
				},
				{
					top: '50%',
					left: '55.2%',
				},
				{
					top: '46.5%',
					left: '49.3%',
				},
				//C
				{
					top: '72%',
					left: '43.2%',
				},
				{
					top: '63.8%',
					left: '43.2%',
				},
				//D
				{
					top: '72%',
					left: '34%',
				},
				{
					top: '63.8%',
					left: '34%',
				},
				{
					top: '72%',
					left: '26.8%',
				},
				{
					top: '63.8%',
					left: '26.8%',
				},
				//E
				{
					top: '50%',
					left: '32.7%',
				},
				{
					top: '46%',
					left: '25.7%',
				},
				{
					top: '46%',
					left: '13.2%',
				},
				//F
				{
					top: '74.3%',
					left: '20.5%',
				},
				{
					top: '68.5%',
					left: '16%',
				},
				
				//SCENA
				{
					top: '68.5%',
					left: '68.3%',
				},
				{
					top: '68.5%',
					left: '83.7%',
				},
				
			]
			dots.push(...desktopDots)
		}
		return dots
	}, [type])
}

export default useDotsGenerator
