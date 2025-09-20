
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Compare from './Pages/comparativeAnalysis'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
        
      </Routes>
    </div>
  )
}

export default App
