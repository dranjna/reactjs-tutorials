import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header,Button} from './Header'

import Footer from './footer'

function App() {
  return (
    <>
     <h1>Welcome to App.jsx</h1>
   <Header />
   <Button />
   <Footer />
    </>
  ) 
}

export default App
