import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    // <img src="/src/images/Results.png" className='' alt="" />
  return (
   <div className='w-[100vw] h-[100dvh] bg-gradient-to-r from-[#0F172A] to-[#1E293B]'>
  <section className='bg-transparent flex'>
    <div className='h-[100vh] w-[30px] bg-emerald-500'></div>
    <div className='flex flex-col justify-between'>
      <main className='flex flex-col justify-center mt-32'>
        <div className='ms-6 md:ms-16'>
          <div className='text-5xl md:text-8xl font-bold text-white'>
            <span className='p-2 rounded-xl bg-emerald-500 me-3'>QUIZ</span>
            <span className='ms-3'>FLOW</span>
          </div>
          <br />
          <div className='h-[10px] w-100 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl mt-4'></div>
          <div className='text-emerald-400 text-2xl md:text-3xl py-5'>For All</div>
        </div>
        <div className='ms-16'>
         <Link to={'/menu'}>
         <button className='px-4 py-2 text-2xl text-white rounded-md bg-emerald-500 hover:cursor-pointer hover:bg-emerald-600 transition'>
            Take a Quiz
          </button>
         </Link>
        </div>
      </main>
      <div className='text-9xl ps-16'>
        <img src="/images/Statistics.png" className='w-12/12' alt="" />
      </div>
    </div>
  </section>



    
</div>

  )
}

export default Home 
