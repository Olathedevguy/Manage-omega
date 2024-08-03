import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pill from './images/bg-tablet-pattern.svg'
import Section2 from './components/Section2'
import Testimonies from './components/Testimonies'
import CallToAction from './components/CallToAction'
const App = () => {
  return (
    <main className='relative overflow-x-clip'>
      <img src={Pill} className='absolute -z-10 -top-20 md:-top-60 -right-20 ' alt="" />
      <Navbar />
      <Hero />
      <Section2 />
     <img src={Pill} className='absolute -z-10 top-[24rem] -right-[18rem] md:top-[1030px] md:-left-[25rem]' alt="" />
      <Testimonies />
      <CallToAction />
    </main>
  )
}
export default App