import NumberPill from "./NumberPill"
import { List } from "../../sectiondata"
// import { useState } from "react"

const RightSection = () => {

    // const [mobileScreen, setMobileScreen] = useState(false)

  return (
    <section className="">
    {
        List.map((data, index) => (
            <div key={index} className="hidden md:flex gap-5 mb-5 leading-7">

            <NumberPill>{data.number}</NumberPill>
        <div className="">
            <h1 className="text-[#242d52] font-bold text-md mb-7">{data.heading}</h1>
            <p className="text-[#9095a7] text-md w-[400px]">{data.description}</p>
        </div>
    </div>
        ))   
    }

    {
        List.map((data, index) => (
            <div key={index} className="mt-14 md:hidden block mb-5 leading-7">

            
        <div className="flex bg-orange-200 h-10 gap-2 rounded-l-full">
        <NumberPill>{data.number}</NumberPill>
            <h1 className="text-[#242d52] font-bold text-md mb-7">{data.heading}</h1>
        </div>
        <p className="text-[#9095a7] text-md w-[368px] mt-5">{data.description}</p>
    </div>
        ))   
    }



    </section>
  )
}
export default RightSection