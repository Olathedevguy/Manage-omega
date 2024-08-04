import Testimony from './Testimony'
import Button from './Button'


const Testimonies = () => {

 

  return (

    

    <div className=' px-5 mx-auto mt-32 text-center'>

    <h2 className='md:text-[45px] text-[40px] font-bold text-center text-[#242d52]'>
        What They've said
    </h2>

    <div className='flex flex-col mt-24 md:flex-row md:space-x-6 mb-14'>

      
      <Testimony />
      
    </div>
    
    <Button>Get Started</Button>

    </div>
  )
}
export default Testimonies