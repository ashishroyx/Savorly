import React from 'react'
import Home from './Home'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Items from './Items'
import Searched from './Searched'
import Res from './Res'

function Pages() {
  return (

    

    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/items/:type' element={<Items/>}/> 
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/rec/:name' element={<Res/>}/>
    </Routes>
    
  )
}

export default Pages