
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Compare from './Pages/comparativeAnalysis'
import TemplateList from "./Pages/TemplateList";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
        <Route path="/templates/:categorySlug" element={<TemplateList/>}/>
      </Routes>
    </div>
  )
}

export default App
