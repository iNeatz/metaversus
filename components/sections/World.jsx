'use client'

import { motion } from 'framer-motion'
import { TitleText, TypingText } from '../CustomTexts'
import styles from '@/lib/styles'
import { fadeIn, staggerContainer } from '@/lib/motion'
import Image from 'next/image'
import MapCard from '../MapCard'

const World = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title='| People on the World' textStyles='text-center' />

				<TitleText
					title={
						<>
							Track friends around you and invite them to play together in the
							same world
						</>
					}
					textStyles='text-center'
				/>

				<motion.div
					variants={fadeIn('up', 'tween', 0.3, 1)}
					className='relative mt-[68px] flex w-full h-[550px]'
				>
					<Image
						src='/map.png'
						alt='map'
						width={1920}
						height={1080}
						className='w-full h-full object-cover'
					/>

					<div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src='/people-01.png'
							alt='people'
							width={70}
							height={70}
							className='w-full h-full'
						/>
					</div>

					<div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src='/people-02.png'
							alt='people'
							width={70}
							height={70}
							className='w-full h-full'
						/>
					</div>

					<div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
						<Image
							src='/people-03.png'
							alt='people'
							width={70}
							height={70}
							className='w-full h-full'
						/>
					</div>

					<MapCard otherStyles='top-[40%] left-[15%]' imgUrl='/card-01.png' title='The Upside Down' />

					<MapCard otherStyles='top-10 right-[200px]' imgUrl='/card-02.png' title='Hawkins Lab' />
				</motion.div>
			</motion.div>
		</section>
	)
}

export default World
