import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Section2 = () => {
  return (
    <div className="container flex justify-center items-center md:items-start md:justify-between  flex-col md:flex-row mt-32">
        <LeftSection />
        <RightSection />
    </div>
  )
}
export default Section2