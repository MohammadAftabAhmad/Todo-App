import React, {useState} from 'react'

function TextForm() {

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
   
   
<h1 className='text-3xl ml-20 mt-5'>Enter your text</h1>
<div className='flex  mt-2 p-2.5 w-full items-center justify-center'>
<textarea id="message" rows="10" value={text} onChange={handleOnchange} className=" w-[90%] text-sm  bg-blue-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
</div>
<div className='buttons ml-18 flex gap-3'>
<button className='bg-black/60 text-white p-1 rounded-2xl hover:bg-black cursor-pointer'onClick={upclick}>Convert to Uppercase</button>
<button className='bg-black/60 text-white p-1 rounded-2xl hover:bg-black cursor-pointer'onClick={lowclick}>Convert to lowercase</button>
<button className='bg-black/60 text-white p-1 rounded-2xl hover:bg-black cursor-pointer' onClick={clr}>clear</button>
</div>
<div className="container ml-15 mt-2">
  <h1 className='text-3xl '>Text Summary</h1>
  <p>{text.split(" ").length} Words and {text.length} characters</p>
  <p>{0.008 *text.split(" ").length } Mins to Read</p>
  <h1 className='text-3xl'>preview</h1>
  <p>{text}</p>
</div>

   </> 
  )
}

export default TextForm