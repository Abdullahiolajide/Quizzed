import React, { useEffect } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'

const Results = () => {
    const storedHistory = JSON.parse(localStorage.getItem('quizHistory'));
    const navigate = useNavigate()
  useEffect(()=>{
    if(!storedHistory){
        navigate('/menu')
    }
  }, [])
  const correctAnswers = storedHistory[storedHistory.length -1].history.filter(question=> question.answer === question.userAnswer)


  return (
    <div>
        <div className='w-12/12 pt-12 mx-auto '>

<div className="max-w-3xl px-6 md:px-2 flex mx-auto justify-between flex-row-reverse">
   
    <button className='cursor-pointer'><Link to={'/menu'}><img src="/images/Group 1.png" alt="" width={30} /></Link></button>
</div>

    <div className='flex justify-center mt-5'>
        <img src="/images/giftbox.png" alt="" />
    </div>

    <div className='font-medium md:mt-16 mt-8 mb-5 max-w-xl px-2 mx-auto text-center text-lg'>
        Results of Fantast Quiz
    </div>

    <div className='flex justify-center items-center mx-4'>
       <div className='px-4 rounded border border-gray-400 bg-gray-100 p-1 mx-2 font-medium'>
       <div className='flex justify-between px-5 py-2'>
            <p className='flex items-center space-x-4'>
                <span className='w-[40px] h-[40px] rounded-4xl flex items-center justify-center border border-gray-300 bg-white'>
                <img src="https://img.icons8.com/?size=100&id=DkuFTsskM50V&format=png&color=31CD63" width={20} alt="" />
                </span>
                <span>TOTAL QUESTIONS</span>
            </p>
            <p>{storedHistory[storedHistory.length -1].history.length}</p>
        </div>
        <hr className='border-white border-2'/>
        <div className='flex w-80 md:w-100 justify-between px-5 py-2'>
            <p className='flex items-center space-x-4'>
            <span className='w-[40px] h-[40px] rounded-4xl flex items-center justify-center border border-gray-300 bg-white'>
                <img src="https://img.icons8.com/?size=100&id=83145&format=png&color=31CD63" width={20} alt="" />
                </span>
                <span>CORRECT ANSWERS</span>
            </p>
            <p>{correctAnswers.length}</p>
        </div>
       </div>
    </div>

    {/* <section className='bg-white w-[100vw] fixe bottom-0 border fixed mt-64 border-gray-300'> */}
        <div className='flex items-center justify-between mx-auto max-w-md mt-4'>
            <div className='w-11/12 md:w-12/12 mx-auto md:mx-3 flex justify-center gap-2 '>
                    <Link to={'/menu'} className='w-100'>
                    <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  cursor-pointer disabled:cursor-disabled'>OKAY</button>
                    </Link>
        </div>
        </div>

    {/* </section> */}
</div>
    </div>
  )
}

export default Results