'use client'

import { fadeIn, planetVariants, staggerContainer } from '@/lib/motion'
import styles from '@/lib/styles'
import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../CustomTexts'
import Image from 'next/image'
import { newFeatures } from '@/lib/constants'
import NewFeatures from '../NewFeatures'

const WhatsNew = () => {
	return (
		<section className={`${styles.xPaddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row-reverse flex-col-reverse gap-8`}
			>
				<motion.div
					variants={planetVariants('right')}
					className={`flex-1 ${styles.flexCenter}`}
				>
					<Image
						src='/whats-new.png'
						alt='whats-new'
						width={1280}
						height={720}
						className='w-[90%] h-[90%] object-contain'
					/>
				</motion.div>

				<motion.div
					variants={fadeIn('right', 'tween', 0.2, 1)}
					className='flex-[0.75] flex justify-center flex-col'
				>
					<TypingText title="| What's new" />
					<TitleText title={<>Get Started with just a few clicks</>} />

					<div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
						{newFeatures.map((feature) => (
							<NewFeatures key={feature.title} {...feature} />
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default WhatsNew
