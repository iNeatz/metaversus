'use client'

import { socials } from '@/lib/constants'
import { footerVariants } from '@/lib/motion'
import styles from '@/lib/styles'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial='hidden'
			whileInView='show'
			className={`${styles.paddings} py-8 relative`}
		>
			<div className='footer-gradient' />

			<div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
				<div className='flex items-center justify-between flex-wrap gap-5'>
					<h4 className='font-bold md:text-[64px] text-[44px] text-white'>
						Enter the Metaverse
					</h4>

					<button
						type='button'
						className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
					>
						<img
							src='/headset.svg'
							alt='headset'
							className='w-6 h-6 object-contain'
						/>
						<span className='font-normal text-[16px] text-white uppercase'>
							Enter Metaverse
						</span>
					</button>
				</div>

				<div className='flex flex-col'>
					<div className='mb-[50px] h-[2px] bg-white opacity-10' />

					<div className='flex items-center justify-between flex-wrap gap-4'>
						<h4 className='font-extrabold text-[24px] text-white'>
							Metaversus
						</h4>
						<p className='font-normal text-[14px] text-white opacity-50'>
							Copyright © 2024 - 2025 Metaversus. All rights reserved.
						</p>
						<div className='flex gap-6'>
							{socials.map((social) => (
								<Image
									src={social.url}
									key={social.name}
									alt={social.name}
									width={24}
									height={24}
									className='object-contain cursor-pointer'
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
