import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-[#f25f3a] px-4 py-2 rounded-full text-white font-semibold'>{children}</button>
  )
}

export default Button