'use client'

import { textContainer, textVariant2 } from '@/lib/motion'
import { motion } from 'framer-motion'

interface CustomTextProps {
	title: string
	textStyles: string
}

export const TypingText: React.FC<CustomTextProps> = ({
	title,
	textStyles,
}) => {
	return (
		<motion.p
			variants={textContainer}
			className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
		>
			{Array.from(title).map((letter, index) => (
				<motion.span key={index} variants={textVariant2}>
					{letter === '' ? '\u00A0' : letter}
				</motion.span>
			))}
		</motion.p>
	)
}

export const TitleText: React.FC<CustomTextProps> = ({ title, textStyles }) => {
	return (
		<motion.h2
			variants={textVariant2}
			initial='hidden'
			whileInView='show'
			className={`mt-2 font-bold md:text-[64px] text-white ${textStyles}`}
		>
			{title}
		</motion.h2>
	)
}
