
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Quiz from './Components/Quiz'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Results from './Components/Results'



 function App (){
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/results' element={<Results />}/>
      </Routes>
    </>
  )
}

export default App
