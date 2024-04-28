'use client'

import { motion } from 'framer-motion'

import { slideIn, staggerContainer, textVariant } from '@/lib/motion'
import styles from '@/lib/styles'
import Image from 'next/image'

const Hero = () => {
	return (
		<section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{
					once: false,
					amount: 0.25,
				}}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<div className={`${styles.flexCenter} flex-col relative z-10`}>
					<motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
						Metaverse
					</motion.h1>
					<motion.div
						variants={textVariant(1.2)}
						className={`${styles.flexCenter} flex-row`}
					>
						<h1 className={styles.heroHeading}>Ma</h1>
						<div className={styles.heroDText} />
						<h1 className={styles.heroHeading}>ness</h1>
					</motion.div>
				</div>

				<motion.div
					variants={slideIn('right', 'tween', 0.2, 1)}
					className='relative w-full md:-mt-[20px] -mt-[12px]'
				>
					<div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]' />

					<Image
						src='/cover.png'
						alt='cover'
						width={1305}
						height={488}
						className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-bl-[42px] z-10 relative'
						priority={true}
					/>

					<div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
						<a href='#explore'>
							<Image
								src='/stamp.png'
								alt='stamp'
								width={155}
								height={155}
								className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
							/>
						</a>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Hero
