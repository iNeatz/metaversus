import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const eudoxusSans = localFont({
	src: [
		{
			path: '../public/fonts/EudoxusSans-ExtraLight.ttf',
			weight: '200',
		},
		{
			path: '../public/fonts/EudoxusSans-Light.ttf',
			weight: '300',
		},
		{
			path: '../public/fonts/EudoxusSans-Regular.ttf',
			weight: '400',
		},
		{
			path: '../public/fonts/EudoxusSans-Medium.ttf',
			weight: '500',
		},
		{
			path: '../public/fonts/EudoxusSans-Bold.ttf',
			weight: '700',
		},
		{
			path: '../public/fonts/EudoxusSans-ExtraBold.ttf',
			weight: '800',
		},
	],
})

export const metadata: Metadata = {
	title: 'Metaversus',
	description:
		'Welcome to a Metaversus website that explores a UI giving ode to the concept of Metaverse',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={eudoxusSans.className}>
				<main className='bg-primary-black overflow-hidden'>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	)
}
