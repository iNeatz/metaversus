'use client'

import { fadeIn } from '@/lib/motion'
import styles from '@/lib/styles'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ExploreCardProps {
	id: string
	imgUrl: string
	title: string
	index: number
	active: string
	handleClick: (id: string) => void
}

const ExploreCard: React.FC<ExploreCardProps> = ({
	id,
	imgUrl,
	title,
	index,
	active,
	handleClick,
}) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className={`relative ${
				active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
			} ${
				styles.flexCenter
			} min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
			onClick={() => handleClick(id)}
		>
			<Image
				src={imgUrl}
				alt={title}
				width={1920}
				height={1080}
				className='absolute w-full h-full object-cover rounded-3xl'
			/>

			{active !== id ? (
				<h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
					{title}
				</h3>
			) : (
				<div className='absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-3xl '>
					<div
						className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-[16px]`}
					>
						<Image
							src='/headset.svg'
							alt='headset'
							width={24}
							height={24}
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>

					<p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
						Enter Metaverse
					</p>

					<h2 className='mt-6 font-semibold sm:text-[32px] text-2xl text-white'>
						{title}
					</h2>
				</div>
			)}
		</motion.div>
	)
}

export default ExploreCard
