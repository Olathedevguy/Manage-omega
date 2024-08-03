import Logo from './Logo'
import Navlinks from './Navlinks'
import Button from './Button'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='container mt-7 flex items-center justify-between relative'>
        <Logo/>
        <Navlinks />
        <div className='hidden md:block'>
            <Button>Get Started</Button>
        </div>
        
        {/* MobileNav */}
        <MobileNav />
    </div>
  )
}

export default Navbar