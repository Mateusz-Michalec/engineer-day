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
					top: '91%',
					left: '85%',
				},
				//B
				{
					top: '66.4%',
					left: '121.6%',
				},
				{
					top: '72.8%',
					left: '108.8%',
				},
				{
					top: '64.7%',
					left: '108.8%',
				},
				{
					top: '74.3%',
					left: '121.5%',
				},
				{
					top: '47.2%',
					left: '138%',
				},
				{
					top: '51%',
					left: '124.2%',
				},
				{
					top: '51%',
					left: '113.5%',
				},
				{
					top: '51%',
					left: '102.6%',
				},
				{
					top: '44.1%',
					left: '108.4%',
				},
				//C
				{
					top: '72.8%',
					left: '91%',
				},
				{
					top: '64.7%',
					left: '91%',
				},
				//D
				{
					top: '72.8%',
					left: '73%',
				},
				{
					top: '64.7%',
					left: '73%',
				},
				{
					top: '72.8%',
					left: '58.6%',
				},
				{
					top: '64.7%',
					left: '58.6%',
				},
				//E
				{
					top: '51%',
					left: '70.6%',
				},
				{
					top: '47.5%',
					left: '55.4%',
				},
				{
					top: '47.5%',
					left: '31.6%',
				},
				//F
				{
					top: '75%',
					left: '46.2%',
				},
				{
					top: '68.5%',
					left: '37%',
				},
				
				//SCENA
				{
					top: '69.2%',
					left: '141%',
				},
				{
					top: '69.2%',
					left: '171%',
				},
				
			]
			dots.push(...mobileDots)
		} else {
			const desktopDots: Dot[] = [
				//A
				{
					top: '91%',
					left: '42.5%',
				},
				//B
				{
					top: '66.4%',
					left: '61%',
				},
				{
					top: '72.8%',
					left: '54.7%',
				},
				{
					top: '64.7%',
					left: '54.7%',
				},
				{
					top: '74.5%',
					left: '61%',
				},
				{
					top: '47.2%',
					left: '68.8%',
				},
				{
					top: '51%',
					left: '62.3%',
				},
				{
					top: '51%',
					left: '57%',
				},
				{
					top: '51%',
					left: '51.5%',
				},
				{
					top: '44.1%',
					left: '54.2%',
				},
				//C
				{
					top: '72.8%',
					left: '45.5%',
				},
				{
					top: '64.7%',
					left: '45.5%',
				},
				//D
				{
					top: '72.8%',
					left: '36.5%',
				},
				{
					top: '64.7%',
					left: '36.5%',
				},
				{
					top: '72.8%',
					left: '29.3%',
				},
				{
					top: '64.7%',
					left: '29.3%',
				},
				//E
				{
					top: '51%',
					left: '35.3%',
				},
				{
					top: '47.5%',
					left: '27.7%',
				},
				{
					top: '47.5%',
					left: '15.8%',
				},
				//F
				{
					top: '75.1%',
					left: '23%',
				},
				{
					top: '68.5%',
					left: '18.5%',
				},
				
				//SCENA
				{
					top: '69.2%',
					left: '71%',
				},
				{
					top: '69.2%',
					left: '86.2%',
				},
				
			]
			dots.push(...desktopDots)
		}
		return dots
	}, [type])
}

export default useDotsGenerator
