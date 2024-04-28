import styles from '@/lib/styles'

const StartSteps = ({ number, text }: { number: number; text: string }) => {
	return (
		<div className={`${styles.flexCenter} flex-row`}>
			<div
				className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
			>
				<p className='font-bold text-[20px] text-white'>
					{number < 10 ? String(number).padStart(2, '0') : number}
				</p>
			</div>
			<p className='flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]'>
				{text}
			</p>
		</div>
	)
}

export default StartSteps
