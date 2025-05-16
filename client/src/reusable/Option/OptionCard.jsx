import React, { createContext } from 'react'
const ValuesContext = createContext()

const OptionCard = ({children, className, isSelected, onClick=()=>{}, index, review, ...rest}) => {

  return (
   <ValuesContext.Provider value={{isSelected, index}}>
         <button className={`flex duration-200 items-center p-3 space-x-4 w-9/12 rounded-md mx-auto border border-gray-500  hover:cursor-pointer ${isSelected ? 'bg-[#31CD63] text-white' :'hover:bg-gray-200'} ${className}`}
            onClick={onClick} {...rest}
            >

           {children}
        </button>
   </ValuesContext.Provider>
  )
}

export default OptionCard
export {ValuesContext}