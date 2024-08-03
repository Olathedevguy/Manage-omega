import hamburgerIcon from '../images/icon-hamburger.svg' 
import closeIcon from '../images/icon-close.svg'
import { navItems } from '../../data'
import { useState } from 'react'
const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    const  handleToggle= () => {
        setIsOpen(!isOpen)
    }
  return (  
    <div className='md:hidden block'>
        <button className='z-50 relative' onClick={handleToggle}>{
            isOpen ? <img src={closeIcon} className='z-20 backdrop-blur-lg' alt="close" /> : <img src={hamburgerIcon} alt="menu" />
            }</button>
        {
            isOpen && <div className='fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center backd'> 
            <ul className={`
                ${isOpen ? 'w-[80%] max-w-[300px] bg-white p-6 rounded shadow-xl flex flex-col md:hidden z-50 gap-6 mt-14 absolute text-center top-3 right-[60px] text-[#242d52] font-semibold' : ''}`}>
            {
                navItems.map((item) => (
                    <li key={item.name}><a href={item.href}>{item.name}</a></li>
                ))
            }
        </ul>
            </div>
        }
    </div>
  )
}

export default MobileNav