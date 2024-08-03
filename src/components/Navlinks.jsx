import React from 'react'
import Navitems from './Navitems'
import { navItems } from '../../data'

const Navlinks = () => {
  return (
    <ul className='hidden md:flex md:flex-row sm:flex-col gap-8 text-[#242d52] font-semi-bold'>
       {
          navItems.map((item) => (
            <Navitems key={item.name} {...item}/>
        ))
       } 
        
    </ul>
  )
}

export default Navlinks