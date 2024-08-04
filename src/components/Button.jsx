import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-[#f25f3a] px-6 py-4 md:px-4 md:py-2 rounded-full text-white font-semibold'>{children}</button>
  )
}

export default Button