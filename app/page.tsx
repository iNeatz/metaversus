import About from '@/components/sections/About.jsx'
import Hero from '@/components/sections/Hero.jsx'
import Explore from '@/components/sections/Explore.jsx'
import GetStarted from '@/components/sections/GetStarted.jsx'
import WhatsNew from '@/components/sections/WhatsNew.jsx'
import World from '@/components/sections/World.jsx'
import Insights from '@/components/sections/Insights.jsx'
import Feedback from '@/components/sections/Feedback.jsx'

export default function Home() {
	return (
		<div>
			<Hero />
			<div className='relative'>
				<About />
				<div className='gradient-03 z-0' />
				<Explore />
			</div>
			<div className='relative'>
				<GetStarted />
				<div className='gradient-04 z-0' />
				<WhatsNew />
			</div>
			<div className='relative'>
				<World />
				<div className='gradient-05 z-0' />
				<Insights />
			</div>
			<Feedback />
		</div>
	)
}
