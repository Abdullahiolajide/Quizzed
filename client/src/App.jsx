
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Quiz from './Components/Quiz'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Results from './Components/Results'
import QuizReview from './Components/QuizReview'
import Test from './Components/Test'



 function App (){
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='review/:id' element={<QuizReview />} />
        <Route path='/test' element={<Test />}/>
      </Routes>
    </>
  )
}

export default App
