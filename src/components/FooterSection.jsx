import Logo from "./Logo"
import { SocialLinks } from "../../data"
import { leftFooterLinks } from "../../data"
import { rightyFooterLinks } from "../../data"
import Button from "./Button"
import logo from '../images/logo.svg'

const FooterSection = () => {
  return (
    <section className="bg-[#171926] relative">
    <div className="pb-10">

    
    <div className="py-10 container items-center md:items-start md:gap-[10rem] flex flex-col-reverse md:flex-row w-full">

    
    <div className="flex w-full mx-auto mt-[30px] md:mt-0 items-center md:items-left md:justify-start justify-center">
          <img src={logo} className="" alt="" />
        </div>
    
    <div className="container md:hidden flex flex-col md:flex-row md:gap-[52.9rem] text-center items-center mt-10">
    <div className="flex gap-2 items-center mb-4 ">
        {
            SocialLinks.map((logo, index) => (
                <img key={index} src={logo.img} size={100} alt={logo.name} />
            ))
        }
    </div>
    <p className='capitalize text-[#9095a7] text-sm'>copyright 2020, all rights reserved</p>
    </div>
   
   
    


    {/* <div className="md:invisible visible flex text-md">

    <div className="w-full items-center">
        <ul className="text-[#9095a7] text-md">
            {
                leftFooterLinks.map((link, index) => (
                    <li key={index} href={link.href} className="mb-2">{link.name}</li>
                ))
            }
        </ul>
    </div>


    <div className="w-full">
        <ul className="text-[#9095a7] text-md">
            {
                rightyFooterLinks.map((link, index) => (
                    <li key={index} href={link.href} className="mb-2">{link.name}</li>
                ))
            }
        </ul>
    </div>

</div> */}



    {/* links */}
<div className="flex md:gap-[12rem] mt-[50px] md:mt-0">

    
    <div className="w-[120px]">

        <ul className="text-[#9095a7] text-md md:text-sm">
            {
                leftFooterLinks.map((link, index) => (
                    <li key={index} href={link.href} className="mb-2">{link.name}</li>
                ))
            }
        </ul>
    </div>


    <div className="w-[120px] ">
        <ul className="text-[#9095a7] text-md md:text-sm">
            {
                rightyFooterLinks.map((link, index) => (
                    <li key={index} href={link.href} className="mb-2">{link.name}</li>
                ))
            }
        </ul>
    </div>
</div>



            <div className="space-y-20">

            
    <div className="flex gap-2">
        <input type="text" placeholder="Updates in your Inbox..." className="text-sm rounded-full px-4 py-2 md:py-3  md:px-4" />
        <Button>Go</Button>
    </div>

   

    </div>
    

    
    </div>




    <div className="container md:flex flex-col hidden md:flex-row md:gap-[60rem]">
    <div className="flex gap-2  md:w-[20px]">
        {
            SocialLinks.map((logo, index) => (
                <img key={index} src={logo.img} alt="" />
            ))
        }
    </div>
    <p className='capitalize text-[#9095a7] text-sm'>copyright 2020, all rights reserved</p>
    </div>
    </div>
        
    </section>
  )
}
export default FooterSection