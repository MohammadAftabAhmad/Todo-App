import React, { useState} from 'react'

function TextForm( {mode} ) {

  const [text, setText]=useState("")

  
  const upclick =( )=>{
    // console.log ("upper case clicked");
    let newText= text.toUpperCase()
    setText(newText)

  }
  const handleOnchange =(event)=>{
    // console.log ("on change");
    setText(event.target.value)
  }
  const lowclick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
  }
  const clr =()=>{
    setText("")
  }

  

  return (
   <>
   
   
<h1 className='text-2xl ml-21 mt-5 pt-5' style={{color: mode==='white'?'black':'white'}} >Enter your text</h1>
<div className='flex  mt-0 p-2.5 w-full items-center justify-center' >
<textarea id="message" rows="10" value={text} onChange={handleOnchange} style={{backgroundColor:mode==='white'?'gray ':'white', color:mode==='white'?'white':'black'}} className=" w-[90%] text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
</div>
<div className='buttons ml-21 flex gap-3 mb-5'>
<button className='bg-black/60 text-white p-1 rounded-2xl px-3 hover:bg-white/40 hover:text-black border-2 border-white duration-500 cursor-pointer'onClick={upclick}>Convert to Uppercase</button>
<button className='bg-black/60 text-white p-1 rounded-2xl px-3 hover:bg-white/40 hover:text-black border-2 border-white duration-500 cursor-pointer'onClick={lowclick}>Convert to lowercase</button>
<button className='bg-black/60 text-white p-1 rounded-2xl px-3 hover:bg-white/40 hover:text-black border-2 border-white duration-500 cursor-pointer' onClick={clr}>clear</button>
</div>
<div className={`container ml-21 `} style={{color: mode==='black'?'white':'black'}}>
  <h1 className='text-3xl '>Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
  <p>{0.008 *text.split(" ").length } Mins to Read</p>
  <h1 className='text-3xl'>preview</h1>
  <p>{text}</p>
</div>

   </> 
  )
}

export default TextForm