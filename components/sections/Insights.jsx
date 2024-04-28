'use client'

import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../CustomTexts'
import styles from '@/lib/styles'
import { staggerContainer } from '@/lib/motion'
import { insights } from '@/lib/constants'
import InsightCard from '../InsightCard'

const Insights = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title='|Insight' textStyles='text-center' />
				<TitleText title='Insight about metaverse' textStyles='text-center' />

				<div className='mt-[50px] flex flex-col gap-[30px]'>
					{insights.map((insight, index) => (
						<InsightCard
							key={`insight-[${index}]`}
							{...insight}
							index={index + 1}
						/>
					))}
				</div>
			</motion.div>
		</section>
	)
}

export default Insights
