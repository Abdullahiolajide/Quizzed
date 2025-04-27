import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
          <div className='text-2xl md:text-5xl font-bold text-white m-6'>
            <span className='p-2 rounded-xl bg-emerald-500 me-2'>QUIZ</span>
            <span className='ms-2 text-black'>FLOW</span>
          </div>
      <section className='max-w-2xl h-[100vh] flex flex-col items-center mt-16 w-12/12 mx-auto p-3'>
        <div className='my-4 text-xl text-center'>Welcome to QuizFlow — Your Ultimate Tech Quiz Arena!</div>
        <div className='my-4 text-center font-medium'>Sharpen your skills, test your knowledge, and discover how well you know the world of tech — one question at a time.
            Choose a category below and let the quiz begin!</div>
            <div>
                <Link to={'/quiz'}>
                <button className='bg-[#31CD63] px-6 py-3 rounded-md text-white my-4'>Start Quiz</button>
                </Link>
            </div>
      </section>
    </div>
  )
}

export default Menu