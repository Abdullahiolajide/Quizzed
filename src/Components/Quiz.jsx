import React, { useEffect, useState } from 'react'
import { data } from '../database/database'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
   const [quizIndices, setQuizIndices] = useState(()=>setIndices())
   const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
   const [currentQuizzes, setCurrentQuizzes] = useState([])

       useEffect(()=>{
        setCurrentQuizzes(
            quizIndices.map((number)=>(
            data.find((quiz, i)=> i == number))))
       }, [])
       
       const alphabets = ['A', 'B', 'C', 'D', 'E', 'F']
       const answeredQuiz = currentQuizzes.filter((quiz)=> quiz.userAnswer)
    //    console.log(answeredQuiz)
       const navigate = useNavigate()
    // console.log(data)    
   function setIndices (){
       const newArray = []
    for (let i = 0; newArray.length < 5 ; i++) {
        const randomNumber = Math.floor(Math.random() * data.length)
        const isDuplicate = newArray.find(index => randomNumber === index)
        if(!isDuplicate){
            newArray.push(randomNumber)
        }
        
    }
    return newArray
   }


    const changeQuizIndex =(goTo)=>{
        if (currentQuizIndex < 4 && goTo === 'next') {
            setCurrentQuizIndex(prev=> prev+1)
        }
        
        else if(currentQuizIndex > 0 && goTo === 'prev'){
            setCurrentQuizIndex(prev=> prev-1)
        }
    }
    const submit = ()=>{
        let storedQuizzes = []
       if (localStorage.getItem('quizHistory')) {storedQuizzes= JSON.parse(localStorage.getItem('quizHistory'))}
        storedQuizzes.push(currentQuizzes)
        localStorage.setItem('quizHistory', JSON.stringify(storedQuizzes))
        // setCurrentQuizzes([])
        // navigate('/results')
        window.location.href = '/results'
    }
    console.log(currentQuizzes[currentQuizIndex]?.options)
    if(!currentQuizzes[currentQuizIndex]?.options){
        return
    }
    const options = currentQuizzes[currentQuizIndex].options.map((option, i)=>{
        const saveUserAnswer = ()=>{
            setCurrentQuizzes(prevQuizzes=> {
                let newArray = []
                prevQuizzes[currentQuizIndex].userAnswer = option
                newArray.push( ...prevQuizzes)
                return newArray
            })
            
            
        }

        const isSelected = currentQuizzes[currentQuizIndex].userAnswer == option;
       return (
       
        <button key={i} className={`flex duration-200 items-center p-3 space-x-4 w-9/12 rounded-md mx-auto border border-gray-500  hover:cursor-pointer ${isSelected ? 'bg-[#31CD63] text-white' :'hover:bg-gray-200'}`}
        onClick={saveUserAnswer}
        >
        <p className={`w-[30px] h-[30px] rounded-2xl text-lg justify-center bg-[#EDE8E3] absolute flex items-center text-black 
            ${isSelected ? 'flip' :''}
            `}>{alphabets[i]}</p>
       {
        isSelected &&
        <p className='w-[30px] h-[30px] rounded-2xl text-lg justify-center bg-[#EDE8E3] absolute flex items-center text-black flip'>
        <img src="src/images/check.png" alt=""  />
        </p>
       }
        <p className='text-sm ms-12'> 
            {option}
            {currentQuizzes[currentQuizIndex.userAnswer]}

        </p>
    </button>
       )
}) 

  return (
    <div className='w-12/12 pt-12 mx-auto '>

    <div className="max-w-3xl px-6 md:px-2 flex mx-auto justify-between">
        <div></div>
        <div className='font-medium'>Quiz Flow</div>
        <button className='cursor-pointer'><img src="src/images/Group 1.png" alt="" width={30} onClick={()=> window.location.href= '/menu'} /></button>
    </div>
                <main className='flex justify-center items-center mt-2 md:hidden'>
                   <div className='flex items-center space-x-3'>
                   <div className='h-[10px] w-[300px] rounded-xl overflow-hidden bg-white border'>
                        <div className={`bg-[#31CD63] duration-400 w-[${answeredQuiz.length*2}0%] h-[10px]`}></div>
                    </div>
                    <div className='text-sm font-medium'>{answeredQuiz.length}/5</div>
                   </div>
               </main>

        <div className='font-medium mt-16 max-w-xl px-2 mx-auto text-center text-lg'>
        {currentQuizIndex+1})&nbsp; {currentQuizzes[currentQuizIndex].question}
        </div>

        <div className='font-medium mt-16 max-w-xl px-2 mx-auto text-center space-y-7 overflow-yscroll mb-32'>

            {options}

          
        </div>

        <section className='bg-white w-[100vw] fixe bottom-0 border fixed mt-64 border-gray-300'>
            <div className='flex items-center justify-between mx-auto max-w-2xl'>
               <main className='items-center space-x-2 hidden md:flex'>
               <div className='h-[10px] w-[300px] rounded-xl ms-10 overflow-hidden border'>
                    <div className={`bg-[#31CD63] duration-400 w-[${answeredQuiz.length*2}0%] h-[10px]`}></div>
                </div>
                <div className='text-sm font-medium'>{answeredQuiz.length}/5</div>
               </main>
                
                <div className='w-11/12 md:w-12/12 mx-auto md:mx-3 flex justify-center gap-2 '>
                <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  hover:cursor-pointer disabled:cursor-disabled ' disabled={currentQuizIndex<1} onClick={()=>changeQuizIndex('prev')}>Previous</button>

                {
                    // answeredQuiz.length === currentQuizzes.length 
                    currentQuizIndex == currentQuizzes.length -1
                    ?
                    (

                        <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  npm run decursor-pointer disabled:cursor-disabled 'onClick={submit}>Finish</button>
                    )
                    :

                    (
                        <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  cursor-pointer disabled:cursor-disabled ' onClick={()=>changeQuizIndex('next')}>Next</button>
                    )
                }




            </div>
            </div>

        </section>
    </div>
  )
}

export default Quiz