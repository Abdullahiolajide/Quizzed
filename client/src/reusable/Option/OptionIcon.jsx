import React, { useContext } from 'react'
import { ValuesContext } from './OptionCard'

const OptionIcon = () => {
    const {isSelected, index} = useContext(ValuesContext)
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
  return (
    <>
                <p 
                 className={`w-[30px] h-[30px] rounded-2xl text-lg justify-center bg-gray-100 absolute flex items-center text-black 
                        ${isSelected ? 'flip' :''}
                    `}>
                        {alphabets[index]}
                </p>


                {
                isSelected &&
                <p className='w-[30px] h-[30px] rounded-2xl text-lg justify-center bg-[#EDE8E3] absolute flex items-center text-black flip'>
                <img src="/images/check.png" alt=""  />
                </p>
                }

    </>
  )
}

export default OptionIcon