import { testimony } from "../../data"
const Testimony = () => {
  return (
    
      
        testimony.map((person) => (
          <div key={person.name} className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-[#f5f5f5]  md:w-[700px] mb-14 md:mb-0">
          
            <img className="w-16 -mt-14" src={person.img} alt="" />
          
          <div className="">

          
          <h5 className="text-xl font-bold text-[#242d52] mb-5">{person.name}</h5>
          <p className="text-md text-[#9095a7] w-[300px] md:w-[350px]">{person.msg}</p>
          </div>
          </div> 
        ))
      
  )
}
export default Testimony