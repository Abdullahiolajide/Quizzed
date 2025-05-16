import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()
  const storedQuizzes = JSON.parse(localStorage.getItem('quizHistory'))
  if(storedQuizzes){ 
    if(!storedQuizzes[0]?.time){

      localStorage.clear('quizHistory') 
    }
  }
  const quizHistories = storedQuizzes ? storedQuizzes.map((quiz, i)=>(
    <div onClick={()=> navigate(`/review/${i}`)} className='hr mx-2 px-1 rounded-lg bg-gray-100 mt-2 active:mx-3 hover:bg-gray-200 px-2 py-1 cursor-pointer hover:bg-gray-100 duration-150' key={i}>
      
      <small>Quiz {i+1}</small>
      <div>Quiz on Unknown</div>
      <small>{quiz.time}</small>
    </div>
  )) : <h2 className='text-center py-5 bg-gray-100'>No Quiz History</h2>
  return (
    <div>
          <div className='text-2xl md:text-5xl font-bold text-white m-6'>
            <span className='p-2 rounded-xl bg-emerald-500 me-2'>QUIZ</span>
            <span className='ms-2 text-black'>FLOW</span>
          </div>
      <section className='max-w-2xl flex flex-col items-center w-12/12 mx-auto p-3'>
        <div className='my-4 text-xl text-center'>Welcome to QuizFlow — Your Ultimate Tech Quiz Arena!</div>
        <div className='my-4 text-center font-medium'>Sharpen your skills, test your knowledge, and discover how well you know the world of tech — one question at a time.
            Choose a category below and let the quiz begin!
            </div>
            <div>
                <Link to={'/quiz'}>
                <button className='bg-[#31CD63] px-6 py-3 rounded-md text-white my-4'>Start Quiz</button>
                </Link>
            </div>
    
            <section className=''>
                <div className='rounded-md w-100 max-w-xs md:max-w-sm'>
                  <div className='w-full bg-gray-900 text-center py-2 text-white'>Quiz History</div>
                  <div className='h-80 overflow-x-hidden'>
                  {quizHistories}
                  </div>
                </div>
            </section>

      </section>
    </div>
  )
}

export default Menu