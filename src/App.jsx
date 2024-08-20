import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Form from './components/Form/Form.jsx'
import Footer from './components/Footer/Footer.jsx'
import Flashcard from './components/Flash card/Flashcard.jsx'

function App() {
  const [flashBank, setFlashBank] = useState([{q: 'Bla bla' ,
    a: 'bla'} ])
  

  return (
    <>
    <Header />
    <Form />
    <Flashcard flashBank={flashBank} />
    <Footer/>
    </>
  )
}

export default App
