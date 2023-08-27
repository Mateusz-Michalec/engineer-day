import { useMemo } from 'react'

interface Dot {
	top: string
	left: string
}

const useDotsGenerator = (type: 'mobile' | 'desktop'): Dot[] => {
	return useMemo(() => {
		const dots: Dot[] = []

		if (type === 'mobile') {
			for (let i = 1; i < 10; i++) {
				const dot: Dot = {
					top: '15%',
					left: `${i * 20 - 5}%`,
				}
				dots.push(dot)
			}

			for (let i = 1; i < 3; i++) {
				const dot: Dot = {
					top: `${i * 20 + 15}%`,
					left: '175%',
				}
				dots.push(dot)
			}

			for (let i = 9; i > 0; i--) {
				const dot: Dot = {
					top: '75%',
					left: `${i * 20 - 5}%`,
				}
				dots.push(dot)
			}

			for (let i = 3; i > 1; i--) {
				const dot: Dot = {
					top: `${i * 20 - 5}%`,
					left: '15%',
				}
				dots.push(dot)
			}
		} else {
			for (let i = 1; i < 10; i++) {
				const dot: Dot = {
					top: '16%',
					left: `${i * 10 - 2}%`,
				}
				dots.push(dot)
			}

			for (let i = 1; i < 3; i++) {
				const dot: Dot = {
					top: `${i * 20 + 16}%`,
					left: '88%',
				}
				dots.push(dot)
			}

			for (let i = 9; i > 0; i--) {
				const dot: Dot = {
					top: '76%',
					left: `${i * 10 - 2}%`,
				}
				dots.push(dot)
			}

			for (let i = 3; i > 1; i--) {
				const dot: Dot = {
					top: `${i * 20 - 4}%`,
					left: '8%',
				}
				dots.push(dot)
			}
		}
		return dots
	}, [type])
}

export default useDotsGenerator
