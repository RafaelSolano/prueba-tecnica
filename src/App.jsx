import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/cards'
import { Hero } from './components/Hero'
import { AllBlogs } from './containers/AllBlogs'

function App() {
 

  return (
    <>
    <Hero/>
     <AllBlogs/>
    </>
  )
}

export default App
