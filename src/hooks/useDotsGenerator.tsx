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
				{
					top: '29.5%',
					left: '103%',
				},
				{
					top: '16.7%',
					left: '96.8%',
				},
				{
					top: '29.5%',
					left: '74.8%',
				},
				{
					top: '16.7%',
					left: '81.8%',
				},
				{
					top: '2.7%',
					left: '78.8%',
				},
				{
					top: '2.7%',
					left: '64%',
				},
				{
					top: '15.5%',
					left: '60.4%',
				},
				{
					top: '2%',
					left: '125.6%',
				},
				{
					top: '31.8%',
					left: '125.2%',
				},
				{
					top: '31.8%',
					left: '52%',
				},
				{
					top: '2%',
					left: '52%',
				},
				{
					top: '94%',
					left: '97%',
				},
				{
					top: '17%',
					left: '130%',
				},
				{
					top: '8%',
					left: '112.6%',
				},
				{
					top: '23.2%',
					left: '107.8%',
				},
				{
					top: '1%',
					left: '106.8%',
				},
			]
			dots.push(...mobileDots)
		} else {
			const desktopDots: Dot[] = [
				{
					top: '29.5%',
					left: '51.5%',
				},
				{
					top: '16.7%',
					left: '48.4%',
				},
				{
					top: '29.5%',
					left: '37.4%',
				},
				{
					top: '16.7%',
					left: '40.9%',
				},
				{
					top: '2.7%',
					left: '39.4%',
				},
				{
					top: '2.7%',
					left: '32%',
				},
				{
					top: '15.5%',
					left: '30.2%',
				},
				{
					top: '2%',
					left: '62.8%',
				},
				{
					top: '31.8%',
					left: '62.8%',
				},
				{
					top: '31.8%',
					left: '26%',
				},
				{
					top: '2%',
					left: '26%',
				},
				{
					top: '94%',
					left: '48.5%',
				},
				{
					top: '17%',
					left: '65%',
				},
				{
					top: '8%',
					left: '56.3%',
				},
				{
					top: '23.2%',
					left: '53.9%',
				},
				{
					top: '1%',
					left: '53.4%',
				},
			]
			dots.push(...desktopDots)
		}
		return dots
	}, [type])
}

export default useDotsGenerator
