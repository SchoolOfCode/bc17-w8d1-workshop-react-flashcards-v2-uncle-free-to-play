import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Form from './components/Form/Form.jsx'
import Footer from './components/Footer/Footer.jsx'
import Flashcard from './components/Flash card/Flashcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Form/>
    <Flashcard/>
    <Footer/>
    
    </>
  )
}

export default App
