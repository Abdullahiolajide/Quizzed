import React, { useEffect, useState } from 'react'
// import { data } from '../database/database'
import { useNavigate } from 'react-router-dom'
import OptionCard from '../reusable/Option/index'
import getCurrentTime12Hour from '../utils/getCurrent12Hour'
import { getData } from '../../api'

const Quiz = () => {
    const [data, setData] = useState([])
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
    const [currentQuizzes, setCurrentQuizzes] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate() 
    
    // Getting the random quiz questions using randomly generated quizex from function setIndices
    const answeredQuiz = React.useMemo(()=>{
       return currentQuizzes.length > 0 ? currentQuizzes.filter((quiz)=> quiz.userAnswer) : []
    }, [currentQuizzes])
    useEffect(()=>{
    async function setQuizData(){
        const getQuizData = await getData()
        setData(getQuizData)
    }
    setQuizData()
    
        }, [])

        useEffect(()=>{
            const quizLength = 5
                if(data.length < quizLength){
                    return 
                }
            function setIndices (){
                const Indices = []
            for (let i = 0; Indices.length < quizLength ; i++) {
                const randomNumber = Math.floor(Math.random() * data.length)
                if(!Indices.includes(randomNumber)){
                    Indices.push(randomNumber)
                }
                
            }
            return Indices
        }
        const Indices = setIndices()
        
    //    setQuizIndices( setIndices())

             setCurrentQuizzes(
                      Indices.map((i)=> data[i])
                )
                setLoading(false)
    }, [data])

        



// Setting Random number sor random questinos to bee Delayed;


    const changeQuizIndex =(goTo)=>{
        if (currentQuizIndex < 4 && goTo === 'next') {
            setCurrentQuizIndex(prev=> prev+1)
        }
        
        else if(currentQuizIndex > 0 && goTo === 'prev'){
            setCurrentQuizIndex(prev=> prev-1)
        }
    }


    //
    const submit = ()=>{
        const date = new Date()
        let storedQuizzes = []
       if (localStorage.getItem('quizHistory')) {storedQuizzes= JSON.parse(localStorage.getItem('quizHistory'))}
        storedQuizzes.push(
            
                {

                    time:getCurrentTime12Hour(), 
                    history: currentQuizzes
                }
                
            
        )
        localStorage.setItem('quizHistory', JSON.stringify(storedQuizzes))
        setCurrentQuizzes([])
        navigate('/results', {replace: true})
    }

    //
    if(!currentQuizzes[currentQuizIndex]?.options){
        return
    }


    const options = currentQuizzes[currentQuizIndex].options.map((option, i)=>{

        const saveUserAnswer = ()=>{
            setCurrentQuizzes(prevQuizzes=> {
                let newArray = [...prevQuizzes]
                newArray[currentQuizIndex]= {
                    ...newArray[currentQuizIndex],
                    userAnswer: option
                }               
                return newArray
            })
            
            
        }

        const isSelected = currentQuizzes[currentQuizIndex].userAnswer == option;
       return (
       
        <OptionCard onClick={saveUserAnswer} key={i} isSelected={isSelected} index={i}>
            <OptionCard.Icon /> 
            <OptionCard.Text>{option}</OptionCard.Text>
        </OptionCard>
       )
}) 

        if (data.length < 1 || loading) {
            return <h1>Loading...</h1>
        }

  return (
    <div className='w-12/12 pt-12 mx-auto '>

    <div className="max-w-3xl px-6 md:px-2 flex mx-auto justify-between">
        <div></div>
        <div className='font-medium'>Quiz Flow</div>
        <button className='cursor-pointer'><img src="/images/Group 1.png" alt="" width={30} onClick={()=> navigate('/menu', {replace: true})} /></button>
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

                        <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  npm run decursor-pointer disabled:cursor-disabled ' onClick={submit}>Finish</button>
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