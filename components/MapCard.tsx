import Image from 'next/image'

const MapCard = ({
	otherStyles,
	imgUrl,
	title
}: {
	otherStyles?: string
	imgUrl: string
	title: string
}) => {
	return (
		<div
			className={`absolute w-[215px] h-[160px] p-[8px] rounded-3xl bg-[#5d6680] max-lg:hidden ${otherStyles}`}
		>
			<Image
				src={imgUrl}
				alt='card'
				width={370}
				height={563}
				className='w-full h-full rounded-2xl'
			/>
			<div className='relative'>
				<div className='absolute bottom-2 left-3 flex flex-col gap-2'>
					<div className='flex flex-row items-center gap-2'>
						<div className='flex'>
							<img
								src='/people-04.png'
								alt='people'
								className='w-6 h-6 object-contain z-[3]'
							/>
							<img
								src='/people-05.png'
								alt='people'
								className='w-6 h-6 object-contain z-[2] -ml-[12px]'
							/>
							<img
								src='/people-06.png'
								alt='people'
								className='w-6 h-6 object-contain z-[1] -ml-[12px]'
							/>
						</div>

						<p className='text-sm text-white'>+ 264 has joined</p>
					</div>

					<h4 className='text-white font-bold text-lg'>{title}</h4>
				</div>
			</div>
		</div>
	)
}

export default MapCard
