import React, { Children } from 'react'

const OptionText = ({children}) => {
  return (
    <p className='text-sm ms-12 text-left'> 
    {children}

    </p>
  )
}

export default OptionText