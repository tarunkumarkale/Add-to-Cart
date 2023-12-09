import React from 'react'
import './Style/App.scss'
import './Style/Header.scss'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './componenet/Home'
import Header from './componenet/Header'
import './Style/Home.scss'
import './Style/Cart.scss'

import './Style/Mediaquery.scss'

import {Toaster} from 'react-hot-toast'
import Cart from './componenet/Cart.jsx'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
        <Routes>
            <Route  path='/'  element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Toaster/>
    </BrowserRouter>
      
    </>
  )
}

export default App
