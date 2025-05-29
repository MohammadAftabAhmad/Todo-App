import React from 'react'
import Nav from './components/Nav'
// import TextForm from './components/TextForm'
import About from './components/About'


function App() {
  return (
    <>
   <Nav name="Utils" title="text" />
   <div className="container">
   {/* <TextForm/> */}
   <About/>
   </div>
  
   
    </>
  )
}

export default App
