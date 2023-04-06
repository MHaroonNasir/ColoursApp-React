import Nav from './Nav';
import {NewColour, Home, ViewColour} from './pages'
import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { useColour } from './contexts/Colours';

function App() {
  // const [colour, setColour] = useState([])
  const [inputText, setInputText] = useState('')

  const {coloursList, setColoursList} = useColour();
  //const [coloursList, setColoursList] = useState([])

  useEffect(() => {
    console.log("App", coloursList);
  }, [coloursList, setColoursList]);

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<h1>Welcome to the colours api</h1>} />
        
        <Route path='/colours' element={<Home />}/>
        <Route path="/colours/:hex" element={<ViewColour/>} />
        <Route path="/colours/new" element={<NewColour inputText={inputText} setInputText={setInputText}/>} />
        
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>

    </div>
  )
}

export default App
