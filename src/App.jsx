import { useEffect, useState } from 'react'

// import Hero from './components/hero'
import Pages from './pages/Pages'

import './App.css'
import Category from './components/Category'
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {



  return (
    <div className='bg-[#A3B18A] w-full overflow-x-hidden relative'>

      <BrowserRouter>

      <div className="absolute top-8 left-0 w-full flex justify-center z-30">
        <Category />
      </div>

      
      <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App
