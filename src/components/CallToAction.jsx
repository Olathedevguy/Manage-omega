import AlternateButton from "./AlternateButton"
import SimplifyBgImgDesktop from '../images/bg-simplify-section-desktop.svg'
import SimplifyBgImgMobile from '../images/bg-simplify-section-mobile.svg'
const CallToAction = () => {
  return (
    <div className="bg-[#f25f3a] mt-[7rem] relative ">
    <img src={SimplifyBgImgDesktop} className="md:visible invisible absolute -top-10" alt="" />
    <img src={SimplifyBgImgMobile} className="md:invisible visible absolute top-10" alt="" />

  
    <div className="container flex md:place-items-center flex-col md:flex-row md:justify-between justify-center w-full md:py-20 py-20 items-center relative">

    <div className="mb-6 md:mb-0">
        <h2 className="text-center md:text-left text-white font-bold text-[35px] w-[290px] md:w-[400px] leading-tight">Simplify how your team works today.</h2>
        
    </div>
    <div className="">
    <AlternateButton>Get Started</AlternateButton>
    </div>
    
   
    </div>
   
    </div>
  )
}
export default CallToAction