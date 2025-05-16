import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import OptionCard from '../reusable/Option/index'

const QuizReview = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const quizHistory =  JSON.parse(localStorage.getItem('quizHistory'))
  const reviewQuiz = quizHistory[id]
  if(!reviewQuiz) return <Navigate to={'/menu'}/>

  console.log(id)
  console.log(reviewQuiz)

  const reviewContent = reviewQuiz.history.map((quiz, i)=>(

     <main className="the-content" key={i}>
          <div className='font-medium mt-16 max-w-xl px-2 mx-auto text-center text-lg'>
          {i+1}. This is the Question
          {quiz.question}
          </div>

          <div className='font-medium mt-12 max-w-xl px-2 mx-auto text-center space-y-7 overflow-yscroll mb-32'>

              {
                quiz.options.map((option, i)=>{
                  const correct = quiz.answer === option && quiz.answer === quiz.userAnswer
                  return(
                     <OptionCard key={i} index={i} isSelected={correct || option === quiz.answer} className={quiz.userAnswer == option && !correct ? 'hover:bg-red-900 bg-red-600 text-white':''}>
                        <OptionCard.Icon /> 
                        <OptionCard.Text>
                          {option} 
                          <br /> 
                          {
                          !quiz.userAnswer && option === quiz.answer ? 
                          <small className='bg-yellow-500 rounded p-1  '>
                            not selected
                          </small> 
                          : null
                          }
                          </OptionCard.Text>
                    </OptionCard>

                  )
                })
              }
          </div>
       </main>

  ))
  return (
       <div className='w-12/12 pt-12 mx-auto '>

    <div className="max-w-3xl px-6 md:px-2 flex mx-auto justify-between">
        <div></div>
        <div className='font-medium'>Quiz Review</div>
        <button className='cursor-pointer'><img src="/images/Group 1.png" alt="" width={30} onClick={()=> navigate('/menu', {replace: true})} /></button>
    </div>
                

      

       {reviewContent}

        <section className='bg-white w-[100vw] fixe bottom-0 border fixed mt-64 border-gray-300'>
            <div className='flex items-center justify-between mx-auto max-w-2xl'>
             
                <div className='w-11/12 md:w-12/12 mx-auto md:mx-3 flex justify-center gap-2 '>
                <button className='bg-[#31CD63] px-4 py-3 rounded-md text-white my-4 md:w-12/12 w-90 mx-auto disabled:bg-gray-300  hover:cursor-pointer disabled:cursor-disabled ' onClick={()=> navigate('/menu')}>Finish Review</button>
            </div>
            </div>

        </section>
    </div>
  )
}

export default QuizReview