import Button from './Button'
import heroImg from '../images/illustration-intro.svg'

const Hero = () => {
  return (
    <section className='mt-14 container grid grid-cols-1 flex-1 justify-center bg-[] md:grid-cols-2 md:gap-[19rem] place-items-center w-full' >
        <div className='order-2 md:order-1 items-center md:items-start text-center md:text-left'>
            <h1 className='md:text-[52px] text-[35px] font-bold md:leading-[55px]  leading-[40px] max-w-[320px] md:max-w-[500px] mb-5 text-[#242d52] mt-5 md:mt-0'>
                Bring everyone together to build better projects.</h1>
            <p className='mb-5 text-[#9095a7] text-lg md:text-md  w-[320px] md:w-[350px]'>Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.</p>
            <Button>Get Started</Button>
        </div>
        <div className='w-full items-center flex justify-center md:justify-end md:items-end order-1 md:order-2 '>
            <img src={heroImg} className='w-[300px] object-cover md:w-[500px]' alt="" />
        </div>
    </section>
  )
}

export default Hero